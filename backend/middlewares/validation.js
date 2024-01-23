const { body } = require('express-validator');

exports.name = body('name')
.notEmpty()
.withMessage('Name is required')
.isLength({min: 5, max:200})
.withMessage('Name is too short minLength of 5 characters')
.trim()

exports.email = body('email')
  .notEmpty()
  .withMessage('Email is required')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail()
  .trim()
  .custom((value) => {
    if (!value.includes('@gmail.com')) {
      throw new Error('please enter a valid gamil');
    }
    return true;
  });


  exports.password = body('password')
  .notEmpty()
  .withMessage('Password is required')
  .isLength({ min: 8, max: 20 })
  .withMessage('Password must be between 8-20 characters long')
  .trim();


  exports.tel = body('tel')
  .notEmpty()
  .withMessage('Phone number is required')
  .isNumeric()
  .withMessage('Phone number should consist of numbers only')
  .isLength({ min: 10, max: 10 }) // Assuming you want exactly 10 digits
  .withMessage('Phone number must be exactly 10 digits')
  .trim();


// exports.confirmPassword = body('confirmPassword', 'Passwords have to match!')
// .custom((value, {req}) => {
//     return req.body.password !== value ? false : true;
// })
// .trim()