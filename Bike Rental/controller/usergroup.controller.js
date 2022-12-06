const UserGroup = require("../models/Usergroup");
const getUserGroups = async (ctx) => {
  try {
    const usergroup = await UserGroup.findAll();
    if (usergroup.length === 0) {
      ctx.body = "Any ShopInfo wasn't found!",
      ctx.status = 400;
      return 0;
    }
    ctx.body = usergroup;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};
const updateUserGroup = async (ctx) => {
  try {
    const id = ctx.params.id;
    const {
        group_name,
        description,
        allow_add,
        allow_edit,
        allow_delete,
        allow_print,
        allow_import,
        allow_export
    } = ctx.request.body;
    if (
      !group_name &&
      !allow_add &&
      !description &&
      !allow_edit &&
      !allow_delete &&
      !allow_print &&
      !allow_import &&
      !allow_export 
    ) {
      ctx.body = {
        status: "ERROR",
        message: "Enter one information",
      };
    }
    const check = await UserGroup.findOne({
      where: {
        id: id,
      },
    });
    const updatedRows = await UserGroup.update(
      {
        group_name: group_name || check.group_name,
        allow_add: allow_add || check.allow_add,
        description: description || check.address,
        allow_edit: allow_edit || check.allow_edit,
        allow_delete: allow_delete || check.allow_delete,
        allow_print: allow_print || check.allow_print,
        allow_import: allow_import || check.allow_import,
        allow_export: allow_export || check.allow_export,
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
const getUserGroupByID = async (ctx) => {
  try {
    const id = ctx.params.id;
    const usergroup = await UserGroup.findByPk(id);
    if (usergroup === null) {
      ctx.body = {
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = { status: "GREAT", data: usergroup };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

const addUserGroup = async (ctx) => {
  try {
    const {
        group_name,
        description,
        allow_add,
        allow_edit,
        allow_delete,
        allow_print,
        allow_import,
        allow_export
    } = ctx.request.body;
    const usergroup = await UserGroup.create({
        group_name,
        description,
        allow_add,
        allow_edit,
        allow_delete,
        allow_print,
        allow_import,
        allow_export
    });
    ctx.body = { status: "GREAT" };
    ctx.status = 201;
  } catch (error) {
    console.error(error);
    ctx.body = { status: "ERROR", message: error.message };
    ctx.status = 400;
  }
};

const deleteUserGroup = async (ctx) => {
  try {
    const id = ctx.params.id;
    const data = await UserGroup.findByPk(id);
    const deleteusrgr = await UserGroup.destroy({ where: { id } });
    if (!deleteusrgr) {
      ctx.body = {
        status: "ERROR",
        message: "WAS NOT FOUND ANY ID!",
      };
      ctx.status = 400;
      return 0;
    }
    ctx.body = {
      status: "DELETED",
      data: deleteusrgr
    };
  } catch (error) {
    console.log(error);
    ctx.body = { status: "Error!", message: error.message };
    ctx.status = 400;
  }
};

module.exports = {
  getUserGroups,
  getUserGroupByID,
  addUserGroup,
  deleteUserGroup,
  updateUserGroup,
};