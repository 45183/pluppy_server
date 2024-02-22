const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        image1: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        mainCategory: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        subCategory: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Product',
        tableName: 'product',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }
};
