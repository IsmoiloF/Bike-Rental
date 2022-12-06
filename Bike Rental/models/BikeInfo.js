const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const BikeInfo = sequelize.define("BikeInfo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    bike_id:{type:DataTypes.INTEGER},
    bike_category_id:{type:DataTypes.INTEGER},
    shop_id:{type:DataTypes.INTEGER},
    bike_name:{type:DataTypes.STRING(30)},
    specs:{type:DataTypes.STRING(100)},
    rent_price:{type:DataTypes.NUMBER},
    availability:{type:DataTypes.BOOLEAN},
    user_id:{type:DataTypes.INTEGER}
  }, 
  {
      freezeTableName:true,
  });
  
  module.exports=BikeInfo