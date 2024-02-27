const User = require('../models/user');


exports.findUserByEmail = (email) => User.findOne({where: {email}});

exports.createUser = (email, name, password, phone) => User.create({
    email, name, password, phone, userType: false
});

exports.findAllUser = () => User.findAll({attributes: ['email', 'name', 'phone']});

exports.getUser = (userId) => User.findOne({where: {userId}, attributes: ['userId', 'email', 'name', 'phone', 'zipCode', 'address1', 'address2', 'userType']});

exports.deleteUser = (userId) => User.destroy({where: {userId}});

exports.updateUser = (userId, email, name, phone, address1, address2, zipCode) => User.update({name, phone, address1, address2, zipCode}, {where: {userId, email}});
