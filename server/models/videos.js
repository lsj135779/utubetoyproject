"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.videos.belongsTo(models.posts);
      // define association here
      //관계작업
      // models.video.belongsTo(models.post, { foreignKey: "post_id" });
    }
  }
  videos.init(
    {
      contents: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "videos",
    }
  );
  return videos;
};
