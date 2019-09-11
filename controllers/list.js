const moment = require('moment');
const { Symbol, Rate } = require('../models');

async function listRates() {
  const sqlResponse = await Symbol.findAll({ include: [ { model: Rate, limit: 1, order: [ ['createdAt', 'DESC'] ] } ] });
  const data = sqlResponse.map(element => {
    const elementObj = {
      symbol: element.symbol,
      rate: element.Rates[0].dataValues.rate,
      timestamp: moment(element.Rates[0].dataValues.timestamp).format('HH:mm:ss, DD.MM.YYYY'),
      user: element.Rates[0].dataValues.user
    };

    return elementObj;
  });

  return data;
}

async function listSymbols() {
  const sqlResponse = await Symbol.findAll();
  const data = sqlResponse.map(element => {
    return element.symbol
  });

  return data;
}

module.exports = {
  listRates,
  listSymbols
}