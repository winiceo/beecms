/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_user_info_defaults', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sex: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    qq: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    wechat: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    address: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'admin_user_info_defaults'
  });
};
