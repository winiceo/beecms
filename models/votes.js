/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('votes', {
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    votable_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    votable_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('up_vote','down_vote'),
      allowNull: false,
      defaultValue: 'up_vote'
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
    tableName: 'votes'
  });
};
