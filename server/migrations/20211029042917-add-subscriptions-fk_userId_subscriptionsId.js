"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("subscriptions", "userId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("subscriptions", {
      fields: ["userId"],
      type: "foreign Key",
      name: "subscriptions_userId",
      references: { table: "users", field: "id" },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addColumn("subscriptions", "subscriptionId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("subscriptions", {
      fields: ["subscriptionId"],
      type: "foreign Key",
      name: "subscriptionId",
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
    await queryInterface.removeColumn("subscriptions", "userId");
    await queryInterface.removeConstraint(
      "subscriptions",
      "subscriptions_userId"
    );
    await queryInterface.removeColumn("subscriptions", "subscriptionId");
    await queryInterface.removeConstraint("subscriptions", "subscriptionId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
