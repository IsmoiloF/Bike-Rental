const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const BikeCategory = sequelize.define("BikeCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    category_id:{type:DataTypes.INTEGER},
    category_name:{type:DataTypes.STRING(30)},
    descriptoin:{type:DataTypes.STRING(100)},
  }, 
  {
      freezeTableName:true,
  });
  
  module.exports=BikeCategory