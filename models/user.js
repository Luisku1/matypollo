'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    salary: DataTypes.FLOAT,
    payDay: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00
    },
    rol: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};