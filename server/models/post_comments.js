"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post_comments.belongsTo(models.users);
      models.post_comments.belongsTo(models.posts);
      // define association here
      //models.post_comments.belongsTo(models.post, { foreignKey: "post_id" });
      //models.post_comments.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  post_comments.init(
    {
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post_comments",
    }
  );
  return post_comments;
};
