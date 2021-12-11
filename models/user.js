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
  };
  User.init({
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }, 
    userEmail: DataTypes.STRING,
    password: DataTypes.STRING,
    userNickname: DataTypes.STRING,
    userGender: DataTypes.STRING,
    userAge: DataTypes.STRING,
    userImage: DataTypes.STRING,
    userLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};