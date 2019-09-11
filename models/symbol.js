'use strict';
module.exports = (sequelize, DataTypes) => {
  const Symbol = sequelize.define('Symbol', {
    symbol: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  Symbol.associate = function(models) {
    models.Symbol.hasMany(models.Rate, {
      foreignKey: {
        name: 'SymbolId',
        allowNull: false
      },
      allowNull: false
    });
  };
  return Symbol;
};