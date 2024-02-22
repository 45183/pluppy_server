const Sequelize = require('sequelize');

module.exports = class OrderItem extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            orderItemId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
            }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'OrderItem',
            tableName: 'orderItem',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.OrderItem.belongsTo(db.Order,  { foreignKey: 'orderId', targetKey: 'orderId' });
        db.OrderItem.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });
        // db.OrderItem.belongsTo(db.OrderStatus,  { foreignKey: 'orderStatusId', targetKey: 'orderStatusId' });
    }
}