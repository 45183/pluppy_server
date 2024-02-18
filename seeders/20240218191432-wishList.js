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
      'wishList',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,

          productId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 5,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          productId: 5,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          productId: 5,
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
