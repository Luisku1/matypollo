'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchDailyBalance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchDailyBalance.init({
    branch: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    initialStock: DataTypes.FLOAT,
    finalStock: DataTypes.FLOAT,
    inputs: DataTypes.FLOAT,
    outputs: DataTypes.FLOAT,
    outgoings: DataTypes.FLOAT,
    cash: DataTypes.FLOAT,
    loans: DataTypes.FLOAT,
    waste: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'BranchDailyBalance',
  });
  return BranchDailyBalance;
};