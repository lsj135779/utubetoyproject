// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//      */
//     return queryInterface.bulkInsert("posts", [
//       {
//         userId: 1,
//         title: "Fun",
//         image: "../images/thumbnail1.png",
//         total_likes: 3,
//         views: 10,
//         video: "../videos/video1.mp4",
//         description: "여자입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         userId: 2,
//         title: "action",
//         image: "../images/thumbnail2.png",
//         total_likes: 10,
//         views: 11,
//         video: "../videos/video2.mp4",
//         description: "보석입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         userId: 3,
//         title: "action",
//         image: "../images/thumbnail3.png",
//         total_likes: 39,
//         views: 50,
//         video: "../videos/video3.mp4",
//         description: "잠수부입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         userId: 4,
//         title: "action",
//         image: "../images/thumbnail4.png",
//         total_likes: 5,
//         views: 12,
//         video: "../videos/video4.mp4",
//         description: "오렌지입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         userId: 5,
//         title: "action",
//         image: "../images/thumbnail5.png",
//         total_likes: 4,
//         views: 8,
//         video: "../videos/video5.mp4",
//         description: "꽃입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         userId: 6,
//         title: "action",
//         image: "../images/thumbnail6.png",
//         total_likes: 32,
//         views: 38,
//         video: "../videos/video6.mp4",
//         description: "수영장입니다.",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete("posts", null, {});
//   },
// };
