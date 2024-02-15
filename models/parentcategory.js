const Sequelize = require("sequelize");

module.exports = class ParentCategory extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				parentCategoryId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
				},
				name: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				timestamps: false,
				underscored: false,
				modelName: "ParentCategory",
				tableName: "parentcategory",
				paranoid: false,
				charset: "utf8mb4",
				collate: "utf8mb4_general_ci",
			}
		);
	}
};
