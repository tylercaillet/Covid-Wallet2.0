'use strict';
const falso = require('@ngneat/falso');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersdocuments = [...Array(5)].map((_) => {
      return {
        userId:  falso.randNumber({min:1,max:20}),
        documentId: falso.randNumber({min:1,max:4}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('usersdocuments', usersdocuments)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('usersdocuments');
  }
};

