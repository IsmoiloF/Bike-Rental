const shopinfo = require("./shopinfo.validator");
const bikecategory = require("./bikecategory.validator");
const adsmanagement = require("./adsmanagement.validator");
const bikeinfo = require("./bikeinfo.validator");
const client = require("./client.validator");
const payment = require("./payment.validator");
const user = require("./user.validator")
const penalty = require("./penalty.validator")

module.exports = {
  shopinfo,
  bikecategory,
  adsmanagement,
  bikeinfo,
  client,
  payment,
  user,
  penalty
};
