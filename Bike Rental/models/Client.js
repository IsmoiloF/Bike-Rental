const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Client = sequelize.define("Client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  client_id: { type: DataTypes.INTEGER},
  client_code: { type: DataTypes.STRING(15) },
  avatar: { type: DataTypes.STRING },
  client_name: { type: DataTypes.STRING(30) },
  adress_email: { type: DataTypes.STRING(30) },
  contact_number: { type: DataTypes.STRING(15) },
  complete_adress: { type: DataTypes.INTEGER },
  username:{type:DataTypes.STRING(30)},
  password:{type:DataTypes.STRING(30)},
  status:{type:DataTypes.BOOLEAN},
}, 
{
    freezeTableName:true,
});

module.exports=Client