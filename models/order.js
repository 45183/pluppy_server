const Sequelize = require('sequelize');

module.exports = class Order extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            orderId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            orderStatus: {
                type: Sequelize.ENUM,
                values: ["결제완료", "배송중", "배송완료"],
                defaultValue: "결제완료"
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Order',
            tableName: 'order',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.Order.belongsTo(db.Address,  { foreignKey: 'addressId', targetKey: 'addressId' });
        db.Order.belongsTo(db.Payment,  { foreignKey: 'paymentId', targetKey: 'paymentId' });
    }
}