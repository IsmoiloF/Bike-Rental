const Penalty = require("../models/penalty");
const {penaltyschema} = require("../validations/penalty.validator")

const getPenalty = async (ctx) => {
  try {
    const data = await Penalty.findAll();
    if (data.length == 0) return (ctx.body = "Ma'lumot topilmadi!");
    ctx.status = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPenaltyById = async (ctx) => {
  try {
    const data = await Penalty.findByPk(ctx.params.id);
    if (!data) return (ctx.body = "Ma'lumot topilmadi!");
    ctx.status = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const addPenalty = async (ctx) => {
//   try {
//     await Penalty.create(ctx.request.body);
//     ctx.status = 201;
//     ctx.body = "Added!";
//   } catch (error) {
//     console.log(error);
//     ctx.status = 500;
//     throw error;
//   }
// };

// const updatePenalty = async (ctx) => {
//   try {
//     await Penalty.update(ctx.request.body, { where: { id: ctx.params.id } });
//     ctx.status = 201;
//     ctx.body = "Updated!";
//   } catch (error) {
//     console.log(error);
//     ctx.status = 500;
//     throw error;
//   }
// };

const deletePenalty = async (ctx) => {
  try {
    await Penalty.destroy({ where: { id: ctx.params.id } });
    ctx.status = 201;
    ctx.body = "Deleted!";
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    throw error;
  }
};
const addPenalty = async (ctx) => {
    try {
      const { error, value } = penaltyschema.validate(ctx.request.body);
      if (error) {
        ctx.body = error.details[0].message;
        ctx.status = 400;
        return 0;
      }
      await Penalty.create(ctx.request.body);
      ctx.status = 201;
      ctx.body = "GREAT";
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      throw error;
    }
  };
  
  const updatePenalty = async (ctx) => {
    try {
      const { error, value } = penaltyschema.validate(ctx.request.body);
      if (error) {
        ctx.body = error.details[0].message;
        ctx.status = 400;
        return 0;
      }
      await Penalty.update(ctx.request.body, {
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
  getPenalty,
  getPenaltyById,
  addPenalty,
  updatePenalty,
  deletePenalty,
};