'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BranchDailyBalances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch: {
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER
      },
      initialStock: {
        type: Sequelize.FLOAT
      },
      finalStock: {
        type: Sequelize.FLOAT
      },
      inputs: {
        type: Sequelize.FLOAT
      },
      outputs: {
        type: Sequelize.FLOAT
      },
      outgoings: {
        type: Sequelize.FLOAT
      },
      cash: {
        type: Sequelize.FLOAT
      },
      loans: {
        type: Sequelize.FLOAT
      },
      waste: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BranchDailyBalances');
  }
};