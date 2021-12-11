'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userEmail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      userNickname: {
        type: Sequelize.STRING
      },
      userGender: {
        type: Sequelize.STRING
      },
      userAge: {
        type: Sequelize.STRING
      },
      userImage: {
        type: Sequelize.STRING
      },
      userLocation: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};