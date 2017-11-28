/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_wallet_charge', {
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
    coin_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    block_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    can_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'user_wallet_charge'
  });
};
