const Sequelize = require('sequelize');

module.exports = class Payment extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            paymentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            payment: {
                type: Sequelize.STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Payment',
            tableName: 'payment',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
}