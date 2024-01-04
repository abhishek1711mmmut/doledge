const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// the (Uploads/files) folders must exist as a base so multer can work.
// it is used to save the uploaded images to the server.
// multer usage in: 

const MIME_TYPE_MAP = {
    'application/pdf': 'pdf',
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
}

let fileUpload = multer({
    limits: 2000000,
    storage: multer.diskStorage({
        // The folder to which the file has been saved	
        destination: (req, file, cb) => {
            cb(null, 'Uploads/Files');
        },
        // the name of the file within the destination
        filename: (req, file, cb) => {
            let ext = '.' + MIME_TYPE_MAP[file.mimetype];
            // cb(null, uuidv4() + ext);
            let fileName = req.body.email + ext;
            cb(null, fileName);
        }
    }),
    // validation of file type
    fileFilter: (req, file , cb) => {
        let isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : {message: 'file type is invalid'};
        cb(error, isValid)
    },
});

module.exports = fileUpload;