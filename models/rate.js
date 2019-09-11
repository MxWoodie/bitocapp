'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    rate: DataTypes.DOUBLE,
    timestamp: DataTypes.DATE,
    user: DataTypes.STRING
  }, {});
  Rate.associate = function(models) {
    models.Rate.belongsTo(models.Symbol, {
      foreignKey: {
        name: 'SymbolId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Rate;
};