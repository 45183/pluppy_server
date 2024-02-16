const ProductService = require("../service/productService");

class ProductController {
	constructor() {
		this.productService = new ProductService();
	}

	// 상품 등록
	registerProduct = async (req, res) => {
		const {
			name,
			price,
			description,
			image1,
			parentCategoryName,
			categoryName,
		} = req.body;

		console.log("controller에서의 name:", name);
		// 상품 정보 하나라도 빠지면 에러메세지 출력
		if (!name || !price || !description || !image1) {
			return res.status(400).json({
				errorMessage: "상품 정보 입력을 완료해 주세요.",
			});
		}
		try {
			const product = await this.productService.createProduct(
				name,
				price,
				description,
				image1,
				parentCategoryName,
				categoryName
			);

			return res.status(201).json({
				message: "상품 등록이 완료되었습니다.",
				product,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				errorMessage: error.message,
				error: error,
			});
		}
	};

	getProducts = async (req, res) => {
		try {
			const result = await this.productService.getProducts();

			return res.status(201).json({
				message: "상품 전체 조회 성공",
				result,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				errorMessage: error.message,
				error: error,
			});
		}
	};

	getItem = async (req, res) => {
		try {
			const productId = req.params.id;
			const item = await this.productService.getItem(productId);

			return res.status(201).json({
				message: "아이템 조회 성공",
				item,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				errorMessage: error.message,
				error: error,
			});
		}
	};

	getProductsOfDog = async (req, res) => {
		try {
			const type = req.params.type;

			if (!type) {
				const result = await this.productService.getProductsOfDog();
				return res.status(201).json({
					message: "강아지 전체 조회 성공",
					result,
				});
			}

			const result = await this.productService.getProductsOfDog(type);
			return res.status(201).json({
				message: `강아지/${type} 전체 조회 성공`,
				result,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				errorMessage: error.message,
				error: error,
			});
		}
	};

	getProductsOfCat = async (req, res) => {
		try {
			const type = req.params.type;
			if (!type) {
				const result = await this.productService.getProductsOfCat();
				return res.status(201).json({
					message: "고양이 전체 조회 성공",
					result,
				});
			}

			const productsOfCat = await this.productService.getProductsOfCat(type);
			return res.status(201).json({
				message: `고양이/${type} 전체 조회 성공`,
				productsOfCat,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				errorMessage: error.message,
				error: error,
			});
		}
	};
}

module.exports = ProductController;
