"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("post_likes", "userId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("post_likes", {
      fields: ["userId"],
      type: "foreign Key",
      name: "post_likes_userId",
      references: { table: "users", field: "id" },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addColumn("post_likes", "post_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("post_likes", {
      fields: ["post_id"],
      type: "foreign Key",
      name: "post_likes_post_id",
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
    await queryInterface.removeColumn("post_likes", "userId");
    await queryInterface.removeConstraint("post_likes", "post_likes_userId");

    await queryInterface.removeColumn("post_likes", "post_id");

    await queryInterface.removeConstraint("post_likes", "post_likes_post_id");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
