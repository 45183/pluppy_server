const Sequelize = require("sequelize");

class productRepository {
	constructor(ProductModel, CategoryModel, ParentCategoryModel) {
		this.productModel = ProductModel;
		this.categoryModel = CategoryModel;
		this.parentCategoryModel = ParentCategoryModel;
	}

	getParentCategoryId = async (mainCategory) => {
		mainCategory = await this.parentCategoryModel.findOne({
			where: { name: mainCategory },
		});

		console.log("[1차 카테고리]", mainCategory.toJSON().parentCategoryId);
		return mainCategory.toJSON().parentCategoryId;
	};
	getCategoryId = async (parentCategoryId, subCategory) => {
		const category = await this.categoryModel.findOne({
			where: { name: subCategory, parentCategoryId: parentCategoryId },
		});
		console.log("[상품 카테고리 결과]", category.toJSON().categoryId);
		return category.toJSON().categoryId;
	};

	createProduct = async (name, price, description, image1, categoryId) => {
		const newProduct = await this.productModel.create({
			name,
			price,
			description,
			image1,
			categoryId,
		});

		console.log("newProduct 생성");

		return newProduct;
	};
}

module.exports = productRepository;
