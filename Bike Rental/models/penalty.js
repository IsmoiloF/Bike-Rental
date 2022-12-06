const sequelize=require("../config/db")
const { DataTypes }=require("sequelize")

const Penalty=sequelize.define(
    "penalty", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    rental_id: { type:DataTypes.INTEGER},
    penalty_amount: { type:DataTypes.INTEGER},
    payment_status: { type:DataTypes.BOOLEAN },
    remarks: { type:DataTypes.STRING(100) },
    paid_by: { type:DataTypes.STRING(30) },
    user_id: { type:DataTypes.INTEGER},
}, 
{
    freezeTableName:true,
})

module.exports=Penalty;