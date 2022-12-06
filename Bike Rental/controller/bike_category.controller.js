const bikeCateg = require("../models/BikeCategory");
const {bikecategoryschema} = require("../validations/bikecategory.validator")

const getCateg = async (ctx) => {
  try {
    const categ = await bikeCateg.findAll();
    if (categ.length === 0) {
      ctx.body = {
        message: "Any bikeCateg wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = categ;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const getCategByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const categ = await bikeCateg.findByPk(id);
    if (categ === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: categ };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const deleteCateg = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await bikeCateg.findByPk(id);
    const deletecateg = await bikeCateg.destroy({ where: { id } });
    if (!deletecateg) {
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
const addCateg = async (ctx) => {
  try {
    const { error, value } = bikecategoryschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await bikeCateg.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = "GREAT";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updateCateg = async (ctx) => {
  try {
    const { error, value } = bikecategoryschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await bikeCateg.update(ctx.request.body, {
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
    getCateg,
    getCategByID,
    addCateg,
    deleteCateg,
    updateCateg
};