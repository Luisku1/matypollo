'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EarningsSource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EarningsSource.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EarningsSource',
  });
  return EarningsSource;
};