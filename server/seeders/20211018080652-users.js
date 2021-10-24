"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "John",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "paul",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "max",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "bob",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "egoing",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "king",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
