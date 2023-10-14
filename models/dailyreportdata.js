'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyReportData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DailyReportData.init({
    sales: DataTypes.FLOAT,
    profits: DataTypes.FLOAT,
    stock: DataTypes.FLOAT,
    outgoings: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DailyReportData',
  });
  return DailyReportData;
};