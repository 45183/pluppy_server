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
      'cartItem',
      [
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 1,
          cartId: 1,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 2,
          cartId: 1,
        },
        {
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 3,
          cartId: 1,
        },
        {
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 4,
          cartId: 1,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 5,
          cartId: 1,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 1,
          cartId: 2,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 2,
          cartId: 2,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 3,
          cartId: 2,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 4,
          cartId: 2,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 5,
          cartId: 2,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 1,
          cartId: 3,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 2,
          cartId: 3,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 3,
          cartId: 3,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 4,
          cartId: 3,
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 5,
          cartId: 3,
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
