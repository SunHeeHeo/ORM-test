'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }, 
    meetingDate: DataTypes.STRING,
    wishDesc: DataTypes.TEXT,
    locationCategory: DataTypes.STRING,
    startLocationAddress: DataTypes.STRING,
    endLocationAddress: DataTypes.STRING,
    totalDistance: DataTypes.STRING,
    totalTime: DataTypes.STRING,
    dogCount: DataTypes.INTEGER,
    routeColor: DataTypes.STRING,
    routeName: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};