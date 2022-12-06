const sequelize=require("../config/db")
const { DataTypes }=require("sequelize")

const Rental=sequelize.define(
    "rental", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    bike_id: { type:DataTypes.DECIMAL, },
    client_id: { type:DataTypes.DECIMAL, },
    rental_start_date: { type:DataTypes.DATE },
    rental_end_date: { type:DataTypes.DATE },
    total_amount: { type:DataTypes.INTEGER },
    payment_status: { type:DataTypes.BOOLEAN },
    rental_status: { type:DataTypes.BOOLEAN },
    remarks: { type:DataTypes.STRING(100) },
    user_id:{ type:DataTypes.DECIMAL },
}, 
{
    freezeTableName:true,
})

module.exports=Rental;