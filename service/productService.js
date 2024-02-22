const productRepository = require('../repository/productRepository');
const Product = require('../models/product');

class ProductService {
  productRepository = new productRepository(Product);

  createProduct = async (name, price, description, image1, parentCategoryName, categoryName) => {
    const newProduct = await this.productRepository.createProduct(
      name,
      price,
      description,
      image1,
      parentCategoryName,
      categoryName,
    );

    return newProduct;
  };

  getProducts = async () => {
    const products = await this.productRepository.getProducts();

    return products;
  };

  getItem = async (productId) => {
    const item = await this.productRepository.getItem(productId);

    return item;
  };

  getProductsOfMain = async (category) => {
    const data = await this.productRepository.getProductsOfMain(category);

    return data;
  };

  getProductsOfSub = async (category) => {
    const data = await this.productRepository.getProductsOfSub(category);

    return data;
  };
}
module.exports = ProductService;
