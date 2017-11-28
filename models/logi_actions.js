/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logi_actions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    logi_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    union_module: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    union_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'logi_actions'
  });
};
