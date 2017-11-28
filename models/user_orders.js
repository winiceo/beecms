/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_orders', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ad_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ad_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ad_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ad_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    qty: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    payment_windowpayment_window_minutes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '30'
    },
    finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    order_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    buyer_estimate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    seller_estimate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_orders'
  });
};
