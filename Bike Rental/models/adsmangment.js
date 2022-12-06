const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const AdsManagement = sequelize.define(
  "adsmanagement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    ad_name: { type: DataTypes.STRING(30) },
    shop_id: { type: DataTypes.INTEGER },
    banner_image: { type: DataTypes.STRING(50) },
    description: { type: DataTypes.STRING(100) },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
    ad_location: { type: DataTypes.BOOLEAN },
    amount: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.DECIMAL },
  },
  {
    freezeTableName: true,
  }
);

module.exports = AdsManagement;
