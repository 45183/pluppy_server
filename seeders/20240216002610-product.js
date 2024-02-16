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
			"product",
			[
				{
					productId: "1",
					name: "상품1",
					description: "상품1에 대한 설명입니다",
					price: 1000,
					image1: "상품1.img",
					categoryId: 1,
					parentCategoryId: "2",
				},
				{
					productId: "2",
					name: "상품1",
					description: "상품1에 대한 설명입니다",
					price: 1000,
					image1: "상품1.img",
					categoryId: 2,
					parentCategoryId: "2",
				},
				{
					productId: "3",
					name: "상품2",
					description: "상품2에 대한 설명입니다",
					price: 1000,
					image1: "상품2.img",
					categoryId: 3,
					parentCategoryId: "2",
				},
				{
					productId: "4",
					name: "상품3",
					description: "상품3에 대한 설명입니다",
					price: 1000,
					image1: "상품3.img",
					categoryId: 4,
					parentCategoryId: "2",
				},
				{
					productId: "5",
					name: "상품4",
					description: "상품4에 대한 설명입니다",
					price: 1000,
					image1: "상품4.img",
					categoryId: 5,
					parentCategoryId: "2",
				},
				{
					productId: "6",
					name: "상품5",
					description: "상품5에 대한 설명입니다",
					price: 1000,
					image1: "상품5.img",
					categoryId: 1,
					parentCategoryId: "3",
				},
				{
					productId: "7",
					name: "상품6",
					description: "상품6에 대한 설명입니다",
					price: 1000,
					image1: "상품6.img",
					categoryId: 2,
					parentCategoryId: "3",
				},
				{
					productId: "8",
					name: "상품7",
					description: "상품7에 대한 설명입니다",
					price: 1000,
					image1: "상품7.img",
					categoryId: 3,
					parentCategoryId: "3",
				},
				{
					productId: "9",
					name: "상품8",
					description: "상품8에 대한 설명입니다",
					price: 1000,
					image1: "상품8.img",
					categoryId: 4,
					parentCategoryId: "3",
				},
				{
					productId: "10",
					name: "상품9",
					description: "상품9에 대한 설명입니다",
					price: 1000,
					image1: "상품9.img",
					categoryId: 5,
					parentCategoryId: "3",
				},
				{
					productId: "11",
					name: "상품10",
					description: "상품10에 대한 설명입니다",
					price: 1000,
					image1: "상품10.img",
					categoryId: 1,
					parentCategoryId: "3",
				},
				{
					productId: "12",
					name: "상품11",
					description: "상품11에 대한 설명입니다",
					price: 1000,
					image1: "상품11.img",
					categoryId: 1,
					parentCategoryId: "2",
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
