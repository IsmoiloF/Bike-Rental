const Koa = require("koa");
const logger = require('koa-logger')
const config = require("config");
const routes = require("./routes/index.routes.js")

const app = new Koa();

// const sequelize = require("./config/db");
const PORT = config.get("PORT");



app.use(routes);

app.use(logger)
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server ${PORT}da Ishga tushdi✅`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
