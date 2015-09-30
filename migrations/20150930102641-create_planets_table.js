'use strict';

module.exports = {
  up: function(migration, DataTypes) {
    migration
      .createTable('Planets', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        x: DataTypes.FLOAT,
        y: DataTypes.FLOAT,
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      });
  },

  down: function(migration, DataTypes) {
    migration
      .dropTable('Planets');
  }
};
