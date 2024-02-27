const OrderItem = require('../models/orderItem');

exports.allOrder = () => OrderItem.findAll({});

exports.findUserOrder = (userId) => OrderItem.findAll({where : {userId}});

exports.findOrder = (userId, createdAt) =>  OrderItem.findAll({where : {userId, createdAt}});

exports.findOrderTime = (createdAt) =>  OrderItem.findAll({where : {createdAt}});