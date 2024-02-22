'use strict';

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
      'product',
      [
        {
          productId: '1',
          name: '상품1강아지',
          description: '상품1에 대한 설명입니다',
          price: 1000,
          image1: '상품1.img',
          mainCategory: 1,
          subCategory: 11,
          stock: 1,
        },
        {
          productId: '2',
          name: '상품2강아지',
          description: '상품2에 대한 설명입니다',
          price: 1000,
          image1: '상품2.img',
          mainCategory: 1,
          subCategory: 12,
          stock: 1,
        },
        {
          productId: '3',
          name: '상품3강아지',
          description: '상품3에 대한 설명입니다',
          price: 1000,
          image1: '상품3.img',
          mainCategory: 1,
          subCategory: 13,
          stock: 1,
        },
        {
          productId: '4',
          name: '상품4강아지',
          description: '상품4에 대한 설명입니다',
          price: 1000,
          image1: '상품4.img',
          mainCategory: 1,
          subCategory: 14,
          stock: 1,
        },
        {
          productId: '5',
          name: '상품5강아지',
          description: '상품5에 대한 설명입니다',
          price: 1000,
          image1: '상품5.img',
          mainCategory: 1,
          subCategory: 15,
          stock: 1,
        },
        {
          productId: '6',
          name: '상품1고양이',
          description: '상품1에 대한 설명입니다',
          price: 1000,
          image1: '상품1.img',
          mainCategory: 2,
          subCategory: 21,
          stock: 1,
        },
        {
          productId: '7',
          name: '상품2고양이',
          description: '상품2에 대한 설명입니다',
          price: 1000,
          image1: '상품2.img',
          mainCategory: 2,
          subCategory: 22,
          stock: 1,
        },
        {
          productId: '8',
          name: '상품3고양이',
          description: '상품3에 대한 설명입니다',
          price: 1000,
          image1: '상품3.img',
          mainCategory: 2,
          subCategory: 23,
          stock: 1,
        },
        {
          productId: '9',
          name: '상품4고양이',
          description: '상품4에 대한 설명입니다',
          price: 1000,
          image1: '상품4.img',
          mainCategory: 2,
          subCategory: 24,
          stock: 1,
        },
        {
          productId: '10',
          name: '상품5고양이',
          description: '상품5에 대한 설명입니다',
          price: 1000,
          image1: '상품5.img',
          mainCategory: 2,
          subCategory: 25,
          stock: 1,
        },
      ],
      {},
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
