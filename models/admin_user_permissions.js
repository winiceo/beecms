/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_user_permissions', {
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    is_inverse: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'admin_user_permissions'
  });
};
