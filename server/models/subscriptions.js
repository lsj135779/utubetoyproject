"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.subscriptions.belongsToMany(models.users, {
      //   through: "users",
      //   foreignKey: "subscriberId",
      // });
      // models.subscriptions.belongsToMany(models.users, {
      //   through: "users",
      //   foreignKey: "userId",
      // });
    }
  }
  subscriptions.init(
    {
      userId: DataTypes.INTEGER,
      subscriberId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "subscriptions",
    }
  );
  return subscriptions;
};
