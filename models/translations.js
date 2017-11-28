/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('translations', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    table_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    column_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    foreign_key: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
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
    tableName: 'translations'
  });
};
