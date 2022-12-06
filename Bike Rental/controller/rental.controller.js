const Rental = require("../models/rental");

const getRentals = async (ctx) => {
  try {
    const rental = await Rental.findAll();
    if (rental.length === 0) {
      ctx.body = {
        message: "Any Rental wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = rental;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const updateRental = async (ctx) => {
  try {
    const id = ctx.params.id;
    const {
        bike_id,
        client_id,
        rental_start_date,
        rental_end_date,
        total_amount,
        payment_status,
        rental_status,
        remarks,
        user_id
    } = ctx.request.body;
    if (
      ! bike_id &&
      !client_id &&
      !rental_start_date &&
      !rental_end_date &&
      !total_amount &&
      !payment_status &&
      !rental_status &&
      !user_id &&
      !remarks 
    ) {
      ctx.body = {
        message: "Enter one information",
      };
    }
    const check = await AdsManagement.findOne({
      where: {
        id: id,
      },
    });
    const updatedRows = await AdsManagement.update(
      {
        bike_id: bike_id || check.bike_id,
        client_id: client_id || check.client_id,
        rental_start_date: rental_start_date || check.rental_start_date,
        rental_end_date: rental_end_date || check.rental_end_date,
        total_amount: total_amount || check.total_amount,
        payment_status: payment_status || payment_status,
        rental_status: rental_status || check.rental_status,
        user_id: user_id || check.user_id,
        remarks: remarks || check.remarks,
      },
      {
        where: { id: id },
      }
    );
    if (!updatedRows) {
      ctx.body = { status: "ERROR", message: "Error during save information!" };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "GREAT",
      data: ctx.request.body,
    };
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const getRentalByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const rental = await Rental.findByPk(id);
    if (rental === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: rental };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const addRental = async (ctx) => {
  try {
    const {
        bike_id,
        client_id,
        rental_start_date,
        rental_end_date,
        total_amount,
        payment_status,
        rental_status,
        remarks,
        user_id
    } = ctx.request.body;
    const rental = await Rental.create({
        bike_id,
        client_id,
        rental_start_date,
        rental_end_date,
        total_amount,
        payment_status,
        rental_status,
        remarks,
        user_id
    });
    ctx.body = { status: "GREAT" };
    ctx.status = 201;
  } catch (error) {
    console.error(error);
    ctx.body = { status: "ERROR", message: error.message };
    ctx.status = 400;
  }
};

const deleteRental = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await Rental.findByPk(id);
    const deleterental = await Rental.destroy({ where: { id } });
    if (!deleterental) {
      ctx.body = {
        status: "ERROR",
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "DELETED",
      data: deleterental
    };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

module.exports = {
    getRentals,
    addRental,
    deleteRental,
    updateRental,
    getRentalByID
};