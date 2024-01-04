const { body } = require('express-validator');

exports.name = body('name')
.notEmpty()
.withMessage('Name is required')
.isLength({min: 5, max:20})
.withMessage('Name is too short minLength of 5 characters')
.trim()

exports.email = body('email')
.notEmpty()
.withMessage('email is required')
.isEmail()
.withMessage('Please enter a valid email')
.normalizeEmail()
.trim()

exports.password = body('password')
.notEmpty()
.withMessage('Password is required')
.isAlphanumeric()
.withMessage('Password should consist of characters and numbers with no special characters')
.isLength({min: 5, max:20})
.withMessage('password must be between 5-20 characters')
.trim()

exports.tel = body('tel')
.notEmpty()
.withMessage('Password is required')
.isNumeric()
.withMessage('Password should consist of numbers only')
.isLength({min: 10, max:11})
.withMessage('password mustbe between 10-11 number')
.trim()

// exports.confirmPassword = body('confirmPassword', 'Passwords have to match!')
// .custom((value, {req}) => {
//     return req.body.password !== value ? false : true;
// })
// .trim()