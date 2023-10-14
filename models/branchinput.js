'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchInput extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchInput.init({
    destiny: DataTypes.INTEGER,
    product: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BranchInput',
  });
  return BranchInput;
};