'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meetingDate: {
        type: Sequelize.STRING
      },
      wishDesc: {
        type: Sequelize.TEXT
      },
      locationCategory: {
        type: Sequelize.STRING
      },
      startLocationAddress: {
        type: Sequelize.STRING
      },
      endLocationAddress: {
        type: Sequelize.STRING
      },
      totalDistance: {
        type: Sequelize.STRING
      },
      totalTime: {
        type: Sequelize.STRING
      },
      dogCount: {
        type: Sequelize.INTEGER
      },
      routeColor: {
        type: Sequelize.STRING
      },
      routeName: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};