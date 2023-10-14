'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EarningsCollected extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EarningsCollected.init({
    amount: DataTypes.FLOAT,
    branch: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    source: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EarningsCollected',
  });
  return EarningsCollected;
};