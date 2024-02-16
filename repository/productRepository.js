const Sequelize = require("sequelize");

class productRepository {
	constructor(ProductModel, CategoryModel, ParentCategoryModel) {
		this.productModel = ProductModel;
		this.categoryModel = CategoryModel;
		this.parentCategoryModel = ParentCategoryModel;
	}

	getCategory = async () => {
		const category = await this.categoryModel.findAll();
		return category;
	};

	getParentCategory = async () => {
		const parentCategory = await this.parentCategoryModel.findAll();
		return parentCategory;
	};

	getParentCategoryId = async (parentCategoryName) => {
		parentCategoryName = await this.parentCategoryModel.findOne({
			where: { name: parentCategoryName },
		});

		return parentCategoryName.toJSON().parentCategoryId;
	};
	getCategoryId = async (categoryName) => {
		categoryName = await this.categoryModel.findOne({
			where: { name: categoryName },
		});
		return categoryName.toJSON().categoryId;
	};

	getProducts = async () => {
		const products = await this.productModel.findAll();
		return products;
	};

	getItem = async (productId) => {
		productId = await this.productModel.findOne({
			where: { productId: productId },
		});
		return productId;
	};

	getProductsOfDog = async (categoryId) => {
		if (!categoryId) {
			const productsOfDog = await this.productModel.findAll({
				where: { parentCategoryId: 2 },
			});
			return productsOfDog;
		}
		const productsOfDog = await this.productModel.findAll({
			where: { parentCategoryId: 2, categoryId: categoryId },
		});
		return productsOfDog;
	};

	getProductsOfCat = async (categoryId) => {
		if (!categoryId) {
			const productsOfCat = await this.productModel.findAll({
				where: { parentCategoryId: 3 },
			});
			return productsOfCat;
		}
		const productsOfCat = await this.productModel.findAll({
			where: { parentCategoryId: 3, categoryId: categoryId },
		});
		return productsOfCat;
	};

	createProduct = async (
		name,
		price,
		description,
		image1,
		categoryId,
		parentCategoryId
	) => {
		const newProduct = await this.productModel.create({
			name,
			price,
			description,
			image1,
			categoryId,
			parentCategoryId,
		});

		console.log("newProduct 생성", newProduct);

		return newProduct;
	};
}
module.exports = productRepository;
