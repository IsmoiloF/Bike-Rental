const Payment = require("../models/payment");
const { paymentschema } = require("../validations/payment.validator");

const getPayment = async (ctx) => {
  try {
    const data = await Payment.findAll();
    if (data.length == 0) return (ctx.body = "Ma'lumot topilmadi");
    ctx.status = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPaymentById = async (ctx) => {
  try {
    const data = await Payment.findByPk(ctx.params.id);
    if (!data) return (ctx.body = "Ma'lumot topilmadi");
    ctx.status = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addPayment = async (ctx) => {
  try {
    const { error, value } = paymentschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await Payment.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = "Added";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updatePayment = async (ctx) => {
  try {
    const { error, value } = paymentschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await Payment.update(ctx.request.body, {
      where: { id: ctx.params.id },
    });
    ctx.status = 201;
    ctx.body = "Updated";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const deletePayment = async (ctx) => {
  try {
    await Payment.destroy({ where: { id: ctx.params.id } });
    ctx.status = 201;
    ctx.body = "Deleted";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

module.exports = {
  getPayment,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
};