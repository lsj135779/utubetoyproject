"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //1:n 1이 n에 대해 hasmany
  //n:1 n이 1에 대해 belongsTo
  post.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      total_likes: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
