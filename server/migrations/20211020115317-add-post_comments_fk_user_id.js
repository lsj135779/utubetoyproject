"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("post_comments", "userId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("post_comments", {
      fields: ["userId"],
      type: "foreign Key",
      name: "post_comments_userId",
      references: { table: "users", field: "id" },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addColumn("post_comments", "postId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("post_comments", {
      fields: ["postId"],
      type: "foreign Key",
      name: "post_comments_postId",
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
    await queryInterface.removeColumn("post_comments", "userId");
    await queryInterface.removeConstraint(
      "post_comments",
      "post_comments_userId"
    );

    await queryInterface.removeColumn("post_comments", "postId");
    await queryInterface.removeConstraint(
      "post_comments",
      "post_comments_post_id"
    );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
