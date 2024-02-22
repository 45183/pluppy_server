const Sequelize = require('sequelize');
const User = require('./user');
const Product = require('./product');
const Cart = require('./cart');
const WishList = require('./wishList');
const Review = require('./review');
const Order = require('./order');
// const OrderItem = require('./orderItem');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Product = Product;
db.Cart = Cart;
db.WishList = WishList;
db.Review = Review;
db.Order = Order;
// db.OrderItem = OrderItem;

User.init(sequelize);

Product.init(sequelize);
Cart.init(sequelize);
WishList.init(sequelize);
Review.init(sequelize);
Order.init(sequelize);
// OrderItem.init(sequelize);

Cart.associate(db);
WishList.associate(db);
Review.associate(db);
Order.associate(db);
// OrderItem.associate(db);

module.exports = db;
