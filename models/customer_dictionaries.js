/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_dictionaries', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: '00000000000'
    },
    name: {
      type: DataTypes.CHAR(16),
      allowNull: true
    }
  }, {
    tableName: 'customer_dictionaries'
  });
};
