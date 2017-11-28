/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coin_type', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(10),
      allowNull: false
    }
  }, {
    tableName: 'coin_type'
  });
};
