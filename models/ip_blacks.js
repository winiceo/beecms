/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip_blacks', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    block_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'ip_blacks'
  });
};
