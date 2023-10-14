'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDailyBalance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDailyBalance.init({
    user: DataTypes.INTEGER,
    lostMoney: DataTypes.FLOAT,
    lostProduct: DataTypes.FLOAT,
    loan: DataTypes.FLOAT,
    foodDiscount: DataTypes.INTEGER,
    dayDiscount: DataTypes.FLOAT,
    penalties: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'UserDailyBalance',
  });
  return UserDailyBalance;
};