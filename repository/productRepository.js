const Sequelize = require('sequelize');

class productRepository {
  constructor(ProductModel) {
    this.productModel = ProductModel;
  }

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

  getProductsOfMain = async (category) => {
    const data = await this.productModel.findAll({
      where: { mainCategory: category },
    });

    return data;
  };

  getProductsOfSub = async (category) => {
    const data = await this.productModel.findAll({
      where: { subCategory: category },
    });

    return data;
  };

  createProduct = async (name, price, description, image1, categoryId, parentCategoryId) => {
    const newProduct = await this.productModel.create({
      name,
      price,
      description,
      image1,
      categoryId,
      parentCategoryId,
    });

    console.log('newProduct 생성');

    return newProduct;
  };
}
module.exports = productRepository;
