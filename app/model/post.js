'use strict';

module.exports = app => {
  const {INTEGER, STRING, DATE} = app.Sequelize;

  return app.model.define('transaction', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      comment: '标题'
    },
    body: {
      type: STRING,
      comment: '内容'
    },
    created_at: {
      type: DATE
    },
    updated_at: {
      type: DATE
    }
  });

};