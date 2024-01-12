const { json } = require('express');
const { User } = require('../model/user');

exports.postCompleteProfile = (req, res, next) => {
    const {email, tel, workStatus, whatsApp} = req.body;

    User.findOne({email: email})
    .then(user => {
        user.phoneNumber = tel;
        user.workStatus = workStatus;
        user.whatsApp = whatsApp;
        return user.save()
    })
    .then(result => {
        console.log(result)
        return res.json({
            status: 'success',
        })
    })
    .catch(err => console.log(err))
}

exports.postUpdateProfile = (req, res, next) => {
    return
}

exports.getUserData = (req, res, next) => {
    const userID = req.params.userID;
    
    User.findOne({_id: userID})
    .then(user => {
        console.log(user);
        return res.json({user})
    })
    .catch(err => console.log(err))

}