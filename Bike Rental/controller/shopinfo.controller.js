const ShopInfo = require("../models/Shopinfo");
const {shopinfoschema} = require("../validations/shopinfo.validator")

const getShopInfo = async (ctx) => {
  try {
    const shopinfos = await ShopInfo.findAll();
    if (shopinfos.length === 0) {
      ctx.body = "Any ShopInfo wasn't found!",
      ctx.status = 400;
      return 0;
    }
    ctx.body = shopinfos;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const getShopInfoById = async (ctx) => {
  try {
    const id = ctx.params.id;
    const shopinfo = await ShopInfo.findByPk(id);
    if (shopinfo === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: shopinfo };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const deleteShopinfo = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await ShopInfo.findByPk(id);
    const delShopInfo = await ShopInfo.destroy({ where: { id } });
    if (!delShopInfo) {
      ctx.body = {
        status: "ERROR",
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "DELETED",
      data: delShopInfo
    };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const addShopInfo = async (ctx) => {
  try {
    const { error, value } = shopinfoschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await ShopInfo.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = "GREAT";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updateShopinfo = async (ctx) => {
  try {
    const { error, value } = shopinfoschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await ShopInfo.update(ctx.request.body, {
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
  getShopInfo,
  getShopInfoById,
  addShopInfo,
  deleteShopinfo,
  updateShopinfo,
};