'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProviderMovement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProviderMovement.init({
    origin: DataTypes.INTEGER,
    destiny: DataTypes.INTEGER,
    product: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProviderMovement',
  });
  return ProviderMovement;
};