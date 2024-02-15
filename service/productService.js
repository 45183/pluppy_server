const productRepository = require('../repository/productRepository');
const product = require('../models/product');

class ProductService {
    productRepository = new productRepository(product);

    createProduct = async (
        name, price, description, image1
    ) => {
        console.log('service에서의 name:',name);
    const newProduct = await this.productRepository.createProduct(
        name, price, description, image1
    );
    return newProduct;
    };
};

module.exports = ProductService;
