const User = require("../models/User");
const bcrypt = require("bcrypt");
const {userschema} = require("../validations/user.validator")


const getUser = async (ctx) => {
  try {
    const user = await User.findAll();
    if (user.length === 0) {
      ctx.body = {
        message: "Any User wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = user;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const getUserByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const user = await User.findByPk(id);
    if (user === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: user };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};


const deleteUser = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await User.findByPk(id);
    const deleteuser = await User.destroy({ where: { id } });
    if (!deleteuser) {
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
const addUser = async (ctx) => {
  try {
    const {
      n
      user_id,
      username,
      password,
      avatar,
      fullname,
      contact,
      email,
      user_category_id,
      status,
    } = ctx.request.body;
    const { error, value } = shopinfoschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }

    const userHashedPassword = bcrypt.hashSync(password, 7);

    const user1 = await User.create({
      user_id,
      username,
      password,
      avatar,
      fullname,
      contact,
      email,
      user_category_id,
      status,
    });

    ctx.body = { status: "SUCCESS", data: user1 };
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

const updateUser = async (ctx) => {
  try {
    const { error, value } = userschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await User.update(ctx.request.body, {
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
    getUser,
    getUserByID,
    addUser,
    deleteUser,
    updateUser
};