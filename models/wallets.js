/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallets', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      unique: true
    },
    coin_type: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    block: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'wallets'
  });
};
