"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "userId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("posts", {
      fields: ["userId"],
      type: "foreign Key",
      name: "userId",
      references: { table: "users", field: "id" },
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
    await queryInterface.removeColumn("posts", "userId");
    await queryInterface.removeConstraint("posts", "userId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
