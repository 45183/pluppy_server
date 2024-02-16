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
		parentCategoryName,
		categoryName
	) => {
		console.log(parentCategoryName, categoryName);
		const parentCategoryId = await this.productRepository.getParentCategoryId(
			parentCategoryName
		);

		const categoryId = await this.productRepository.getCategoryId(categoryName);

		const newProduct = await this.productRepository.createProduct(
			name,
			price,
			description,
			image1,
			categoryId,
			parentCategoryId
		);

		return newProduct;
	};

	getProducts = async () => {
		const parentCategory = await this.productRepository.getParentCategory();
		const products = await this.productRepository.getProducts();

		return {
			parentCategory: parentCategory,
			products: products,
		};
	};

	getItem = async (productId) => {
		const item = await this.productRepository.getItem(productId);

		return item;
	};

	getProductsOfDog = async (type) => {
		//Type이 없으면
		const category = await this.productRepository.getCategory();
		if (!type) {
			const productsOfDog = await this.productRepository.getProductsOfDog();

			return {
				category: category,
				productsOfDog: productsOfDog,
			};
		}
		////Type이 있으면
		const categoryId = await this.productRepository.getCategoryId(type);
		const productsOfDog = await this.productRepository.getProductsOfDog(
			categoryId
		);

		return {
			category: category[categoryId - 1].name,
			productsOfDog: productsOfDog,
		};
	};

	getProductsOfCat = async (type) => {
		//Type이 없으면
		const category = await this.productRepository.getCategory();
		if (!type) {
			const productsOfCat = await this.productRepository.getProductsOfCat();

			return {
				category: category,
				productsOfCat: productsOfCat,
			};
		}
		////Type이 있으면
		const categoryId = await this.productRepository.getCategoryId(type);
		const productsOfCat = await this.productRepository.getProductsOfCat(
			categoryId
		);

		return {
			category: category[categoryId - 1].name,
			productsOfCat: productsOfCat,
		};
	};
}
module.exports = ProductService;
