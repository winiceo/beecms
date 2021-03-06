/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_role_permissions', {
    role_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'admin_role_permissions'
  });
};
