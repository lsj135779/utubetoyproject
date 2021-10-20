"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post_likes.belongsTo(models.users, {
        allowNull: false,
        foreignKey: "user_id",
      });
      models.post_likes.belongsTo(models.posts);
      // define association here
      // models.post_likes.belongsTo(models.post, { foreignKey: "post_id" });
      // models.post_likes.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  post_likes.init(
    {},
    {
      sequelize,
      modelName: "post_likes",
    }
  );
  return post_likes;
};
