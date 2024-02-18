const User = require("../models/user");
const Cart = require("../models/cart");
const WishList = require("../models/wishList");

exports.findUserByEmail = (email) => User.findOne({ where: { email } });

exports.findUserByUserId = async (userId) => {
	const result = await User.findOne({ where: { userId } });
	const user = result.toJSON().userId;
	return user;
};

exports.createUser = async (email, name, password, phone) => {
	const user = await User.create({
		email,
		name,
		password,
		phone,
		permission: false,
	});

	const userId = await user.toJSON().userId;

	// 사용자에 대한 cart 인스턴스 생성 및 연결
	await Cart.create({ userId: userId })
		.then(() => {
			console.log("cart생성");
		})
		.catch((err) => {
			console.log("Cart 생성 실패", err);
		});

	return user;
};

exports.findAllUser = () =>
	User.findAll({ attributes: ["email", "name", "phone"] });
