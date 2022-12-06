const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  user_id: { type: DataTypes.INTEGER},
  username:{type:DataTypes.STRING(30)},
  password:{type:DataTypes.STRING(30)},
  avatar: { type: DataTypes.STRING },
  fullname:{type:DataTypes.STRING},
  contact: { type: DataTypes.STRING},
  email: { type: DataTypes.STRING(30) },
  user_category_id:{type:DataTypes.BOOLEAN},
  status:{type:DataTypes.BOOLEAN},
}, 
{
    freezeTableName:true,
});

module.exports=User