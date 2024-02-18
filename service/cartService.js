const userRepository = require("../repository/userRepository");
const cartRepository = require("../repository/cartRpository");
const CartItem = require("../models/cartItem");

exports.getItems = async (userId) => {
	const cartId = await cartRepository.getCartId(userId);
	const items = await cartRepository.getItems(cartId);

	return items;
};

exports.addItem = async (amount, userId, productId) => {
	try {
		const cartId = await cartRepository.getCartId(userId);

		//item이 cart에 있는지 조회
		const cartItemId = await cartRepository.checkItemsOfUser(cartId, productId);

		// cartItem에 추가
		const item = await cartRepository.addItem(
			cartItemId,
			amount,
			userId,
			productId,
			cartId
		);

		return item;
	} catch (err) {
		console.log("cart 서비스 addItem 에러");
	}
};

exports.setAmount = async (cartItemId, amount) => {
	const item = await cartRepository.setAmount(cartItemId, amount);

	return item;
};

exports.deleteItems = async (items) => {
	await Promise.all(
		items.map(async (item) => {
			await cartRepository.deleteItems(item);
		})
	);
};
