const { Symbol, Rate } = require('../models');

async function addRecord(data, user) {
  const { id } = await Symbol.findOne({ where: { symbol: data.symbol } });
  await Rate.create({
    rate: data.rate,
    timestamp: new Date(),
    user: user,
    SymbolId: id
  });
}

module.exports = {
  addRecord
}