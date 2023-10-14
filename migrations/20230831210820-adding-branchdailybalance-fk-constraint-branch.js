'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.addConstraint('BranchDailyBalances',
    {
      type: 'FOREIGN KEY',
      name: 'branchdailybalance-branch-fk',
      fields: ['branch'],

      references: {

        table: 'Branches',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
