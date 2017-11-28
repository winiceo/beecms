/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_user_info_personals', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    district_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    card_no: {
      type: DataTypes.CHAR(18),
      allowNull: true
    },
    certificate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    wx: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    qq: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    district_detail: {
      type: DataTypes.STRING(255),
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
    check_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'admin_user_info_personals'
  });
};
