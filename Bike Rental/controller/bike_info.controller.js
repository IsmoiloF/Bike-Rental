const bikeInfo = require("../models/BikeInfo");
const {bikeinfoschema} = require("../validations/bikeinfo.validator")


const getInfo = async (ctx) => {
  try {
    const info = await bikeInfo.findAll();
  if (info.length === 0) {
      ctx.body = {
        message: "Any bikeInfo wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = info;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const getInfoByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const info = await bikeInfo.findByPk(id);
    if (info === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: info };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const deleteInfo = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await bikeInfo.findByPk(id);
    const deleteinfo = await bikeInfo.destroy({ where: { id } });
    if (!deleteinfo) {
      ctx.body = {
        status: "ERROR",
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "DELETED",
    };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const addInfo = async (ctx) => {
  try {
    const { error, value } = bikeinfoschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await bikeInfo.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = "GREAT";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updateInfo = async (ctx) => {
  try {
    const { error, value } = bikeinfoschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await bikeInfo.update(ctx.request.body, {
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
module.exports = {
    getInfo,
    getInfoByID,
    updateInfo,
    deleteInfo,
    addInfo
};