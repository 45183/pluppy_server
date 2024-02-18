"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"category",
			[
				{
					categoryId: "1",
					name: "장난감",
				},
				{
					categoryId: "2",
					name: "사료",
				},
				{
					categoryId: "3",
					name: "간식",
				},
				{
					categoryId: "4",
					name: "옷",
				},
				{
					categoryId: "5",
					name: "용품",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
