const Sequelize = require('sequelize');

module.exports = class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orderId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        payment: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        totalPrice: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        orderStatus: {
          type: Sequelize.ENUM,
          values: ['결제완료', '배송중', '배송완료'],
          defaultValue: '결제완료',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Order',
        tableName: 'order',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(db) {
    db.Order.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'userId' });
    db.Order.belongsTo(db.Product, { foreignKey: 'productId', targetKey: 'productId' });
  }
};
