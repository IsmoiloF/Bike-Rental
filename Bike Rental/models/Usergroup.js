const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Usergroup = sequelize.define("Usergroup", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  user_group_id: { type: DataTypes.INTEGER},
  group_name:{type:DataTypes.STRING(30)},
  description:{type:DataTypes.STRING(50)},
  allow_add:{type:DataTypes.BOOLEAN},
  allow_edit:{type:DataTypes.BOOLEAN},
  allow_delete:{type:DataTypes.BOOLEAN},
  allow_print:{type:DataTypes.BOOLEAN},

  allow_export:{type:DataTypes.BOOLEAN},
}, 
{
    freezeTableName:true,
});

module.exports=Usergroup