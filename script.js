const axios = require('axios');
const { Symbol, Rate } = require('./models');

async function fillDatabase() {
  const response = await axios.get('https://api.hitbtc.com/api/2/public/ticker/');
  const data = response.data.map(({ last, timestamp, symbol }) => ({
    last,
    timestamp,
    symbol,
  }));

  data.forEach(async element => {
    const [{ id }] = await Symbol.findOrCreate({ where: { symbol: element.symbol } });
    await Rate.create({
      rate: element.last,
      timestamp: element.timestamp,
      user: 'system',
      SymbolId: id,
    });
  });
}

fillDatabase();
