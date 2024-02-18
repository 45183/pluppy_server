const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const cartService = require("../service/cartService");
exports.getItems = async (req, res, next) => {
	try {
		console.log("[카트 컨트롤러]", req.session.passport.user);
		const userId = req.session.passport.user;
		console.log(userId);
		await cartService
			.getItems(userId)
			.then((items) =>
				res.status(200).json({ message: "카트 아이템 불러오기", items })
			)
			.catch((err) => next(err));
	} catch (err) {
		console.log("cart 컨트롤러 getItemsOfUser 에러");
	}
};

exports.addItem = async (req, res, next) => {
	try {
		// const userId = req.session.passport.user;
		const { amount, userId, productId } = req.body;
		console.log(amount, userId, productId);
		await cartService
			.addItem(amount, userId, productId)
			.then((item) =>
				res.status(200).json({ message: "아이템 카트에 등록하기", item })
			)
			.catch((err) => next(err));
	} catch (err) {
		console.log("cart 컨트롤러 addItem 에러");
	}
};

exports.setAmount = async (req, res, next) => {
	try {
		// const userId = req.session.passport.user;
		const { cartItemId, amount } = req.body;
		console.log(cartItemId, amount);
		await cartService
			.setAmount(cartItemId, amount)
			.then(() => res.status(200).json({ message: "수량 변경 완료" }))
			.catch((err) => next(err));
	} catch (err) {
		console.log("cart 컨트롤러 updateItem 에러");
	}
};

exports.deleteItems = async (req, res, next) => {
	try {
		const { items } = req.body;
		console.log("deleteItems에서 배열", items);

		await cartService
			.deleteItems(items)
			.then((result) =>
				res.status(200).json({ message: "아이템 삭제하기", result })
			)
			.catch((err) => next(err));
	} catch (err) {
		console.log("cart 컨트롤러 updateItem 에러");
	}
};
