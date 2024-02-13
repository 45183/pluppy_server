const Sequelize = require('sequelize');

class productRepository {
    constructor(ProductModel) {
      this.productModel = ProductModel;
    }

    createProduct = async (
        name, price, description, image1
    ) => {
        console.log('repository에서의 name:',name);
        console.log('모델',this.productModel);
        const newProduct = await this.productModel.create({
            name, price, description, image1});
            
            console.log('newProduct결과',newProduct);
            
        return newProduct;
    };
}

module.exports = productRepository;