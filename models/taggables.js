/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taggables', {
    tag_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    taggable_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    taggable_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'taggables'
  });
};
