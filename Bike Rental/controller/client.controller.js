const Client = require("../models/Client");
const bcrypt = require("bcrypt");
const { clientschema } = require("../validations/client.validator")


const getClient = async (ctx) => {
  try {
    const client = await Client.findAll();
    if (client.length === 0) {
      ctx.body = {
        message: "Any Client wasn't found!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = client;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};


const getClientByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const client = await Client.findByPk(id);
    if (client === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: client };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const deleteClient = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await Client.findByPk(id);
    const deletclient = await Client.destroy({ where: { id } });
    if (!deleteclient) {
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
const updateClient = async (ctx) => {
  try {
    const { error, value } = clientschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }
    await Client.update(ctx.request.body, {
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
const addClient = async (ctx) => {
  try {
    const {
      client_code,
      avatar,
      client_name,
      email_address,
      contact_number,
      complete_address,
      user_name,
      password,
      status,
    } = ctx.request.body;

    const { error, value } = clientschema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.details[0].message;
      ctx.status = 400;
      return 0;
    }

    const clientHashedPassword = bcrypt.hashSync(password, 7);

    const client1 = await Client.create({
      client_code,
      avatar,
      client_name,
      email_address,
      contact_number,
      complete_address,
      user_name,
      password: clientHashedPassword,
      status,
    });
    ctx.body = { status: "GREAT", data: client1 };
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};

module.exports = {
   getClient,
   getClientByID,
   updateClient,
   deleteClient,
   addClient
};