const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Shopinfo = sequelize.define("shopinfo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  shop_name: { type: DataTypes.STRING, unique: true },
  owner_name: { type: DataTypes.STRING },
  adress: { type: DataTypes.STRING(1000) },
  email_adress: { type: DataTypes.STRING(15) },
  contact_number: { type: DataTypes.STRING(15) },
  website: { type: DataTypes.STRING(15) },
  updated_by: { type: DataTypes.INTEGER },
}, 
{
    freezeTableName:true,
});

module.exports=Shopinfo