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
      'user',
      [
        {
          email: 'user1@example.com',
          name: 'One',
          password: '1234',
          phone: '1234',
          userType: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user2@example.com',
          name: 'Two',
          password: '1234',
          phone: '5678',
          userType: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user3@example.com',
          name: 'Three',
          password: '1234',
          phone: '9012',
          userType: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
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
