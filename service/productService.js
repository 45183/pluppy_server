const productRepository = require("../repository/productRepository");
const Product = require("../models/product");
const Category = require("../models/category");
const ParentCategory = require("../models/parentcategory");

class ProductService {
	productRepository = new productRepository(Product, Category, ParentCategory);

	createProduct = async (
		name,
		price,
		description,
		image1,
		mainCategory,
		subCategory
	) => {
		const parentCategoryId = await this.productRepository.getParentCategoryId(
			mainCategory
		);

		const categoryId = await this.productRepository.getCategoryId(
			parentCategoryId,
			subCategory
		);

		const newProduct = await this.productRepository.createProduct(
			name,
			price,
			description,
			image1,
			categoryId
		);
		return newProduct;
	};
}

module.exports = ProductService;
