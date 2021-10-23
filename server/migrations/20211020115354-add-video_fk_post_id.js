"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("videos", "postId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("videos", {
      fields: ["postId"],
      type: "foreign Key",
      name: "videos_post_id",
      references: { table: "posts", field: "id" },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("videos", "postId");
    await queryInterface.removeConstraint("videos", "videos_post_id");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
