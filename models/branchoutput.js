'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchOutput extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchOutput.init({
    origin: DataTypes.INTEGER,
    product: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BranchOutput',
  });
  return BranchOutput;
};