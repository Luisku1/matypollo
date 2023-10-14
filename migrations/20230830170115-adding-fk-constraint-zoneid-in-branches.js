'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.addConstraint(
      'Branches', {

        type: 'FOREIGN KEY',
        name: 'zone-fk-in-branches',
        fields: ['zone'],

        references: {

          table: 'Zones',
          field: 'id'
        }
      }
    )

  },

  async down (queryInterface, Sequelize) {

    return queryInterface.removeConstraint(
      'Branches',
      'zone-fk-in-branches'
    )
  }
};;
