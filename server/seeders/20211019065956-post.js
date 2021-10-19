'use strict';

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
    let datas = [{
      user_id: 1,
      title: "Fun",
      image: "../images/thumbnail1.png",
      total_likes: 3,
      views: 10,
      created_at: "2021-09-11",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ];

    return queryInterface.bulkInsert('posts', datas, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
