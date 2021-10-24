"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("videos", [
      {
        postId: 1,
        contents: "../videos/video1.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        contents: "../videos/video2.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        contents: "../videos/video3.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 4,
        contents: "../videos/video4.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        contents: "../videos/video5.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 6,
        contents: "../videos/video6.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("videos", null, {});
  },
};
