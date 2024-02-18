const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");
const Product = require("../models/product");
const Category = require("../models/category");
const ParentCategory = require("../models/parentcategory");

exports.getCartId = async (userId) => {
	const result = await Cart.findOne({ where: { userId: userId } });
	const cartId = result.toJSON().cartId;
	return cartId;
};

exports.getItems = (cartId) => {
	const items = CartItem.findAll({
		where: { cartId: cartId },
		include: {
			model: Product,
			// include: [Category, ParentCategory],
		},
	});

	return items;
};

exports.checkItemsOfUser = async (cartId, productId) => {
	const result = await CartItem.findOne({
		where: { cartId: cartId, productId: productId },
	});

	if (result) {
		const cartItemId = result.toJSON().cartItemId;
		return cartItemId;
	}

	return;
};

exports.addItem = async (cartItemId, amount, userId, productId, cartId) => {
	if (cartItemId) {
		const item = await CartItem.findByPk(cartItemId);
		item.amount += amount;
		await item.save();
		return item;
	}
	const item = CartItem.create({
		amount,
		userId,
		productId,
		cartId,
	});
	console.log("cartRepository의 addItem 함수 결과 성공,");
	return item;
};

exports.setAmount = async (cartItemId, amount) => {
	console.log("updateItem에 전달된 ", cartItemId);
	const result = await CartItem.update(
		{ amount: amount },
		{ where: { cartItemId: cartItemId } }
	);

	if (result) {
		const item = await CartItem.findOne({
			where: { cartItemId: cartItemId },
		});
		console.log("카트 아이템이 성공적으로 업데이트되었습니다.");
		return item;
	}
};

exports.deleteItems = async (cartItemId) => {
	await CartItem.destroy({ where: { cartItemId: cartItemId } });
};
