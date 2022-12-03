const list = require("../country/state/city/index.js");
const getPeopleInCity = require("../utilities/utils/index.js");

const results = getPeopleInCity(list);

module.exports = results;
