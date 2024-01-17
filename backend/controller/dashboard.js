const { json } = require('express');
const { User } = require('../model/user');

exports.postCompleteProfile = (req, res, next) => {
    let {userID, tel, workStatus, whatsApp} = req.body;
    workStatus = workStatus ? workStatus.split(' ')[1] : '';
    
    User.findOne({_id: userID})
    .then(user => {
        user.phoneNumber = tel;
        user.workStatus = workStatus;
        user.whatsApp = whatsApp;
        return user.save()
    })
    .then(result => {
        return res.json({
            status: 'success',
        })
    })
    .catch(err => console.log(err))
}

exports.postUpdateProfile = (req, res, next) => {
    const {_id , name, email, tel, workStatus, whatsApp} = req.body;
    User.findOne({_id: _id})
    .then(user => {
        user.name = name;
        user.email = email;
        user.phoneNumber = tel;
        user.workStatus = workStatus;
        user.whatsApp = whatsApp;
        return user.save()
    })
    .then(result => {
        return res.json({
            status: 'success',
        })
    })
    .catch(err => {
        console.log(err)
        return res.json({
            status: 'failed',
            error: 'Internal server error occaured, please try later!',
        })
    })
}

exports.getUserData = (req, res, next) => {
    const userID = req.params.userID;
    
    User.findOne({_id: userID})
    .then(user => {
        console.log(user);
    
        let count = 0;
        count+= user.name != "" && 1;
        count+= user.picture != "" && 1;
        count+= user.email != "" && 1;
        count+= user.phoneNumber != 0 && 1;
        count+= user.password != "" && 1;
        count+= user.workStatus != "" && 1; 
        // count+= user.whatsApp != false && 1;

        return res.json({
            user,
            count,
        })
    })
    .catch(err => console.log(err))

}