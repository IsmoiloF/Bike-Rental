const AdsManagement = require("../models/adsmangment");
const { adsmanagementschema } = require("../validations/adsmanagement.validator");


const getAdsManagements = async (ctx) => {
  try {
    const adsmanagement = await AdsManagement.findAll();
    if (adsmanagement.length === 0) {
      ctx.body = {
        message: "Any AdsManagement wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = adsmanagement;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const getAdsManagementByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const adsmanagement = await AdsManagement.findByPk(id);
    if (adsmanagement === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: adsmanagement };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};


const deleteAdsManagement = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await AdsManagement.findByPk(id);
    const deleteadsmen = await AdsManagement.destroy({ where: { id } });
    if (!deleteadsmen) {
      ctx.body = {
        status: "ERROR",
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "DELETED",
      data: deleteadsmen
    };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const addAdsManagement = async (ctx) => {
  try {
    const { error, value } = adsmanagementschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await AdsManagement.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = "GREAT";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updateAdsManagement = async (ctx) => {
  try {
    const { error, value } = adsmanagementschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await AdsManagement.update(ctx.request.body, {
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
  getAdsManagements,
  getAdsManagementByID,
  addAdsManagement,
  deleteAdsManagement,
  updateAdsManagement,
};