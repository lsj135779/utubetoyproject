"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("posts", [
      {
        userId: 1,
        title: "Fun",
        image: "../images/thumbnail1.png",
        total_likes: 3,
        views: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "action",
        image: "../images/thumbnail1.png",
        total_likes: 4,
        views: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
