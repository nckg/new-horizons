'use strict';

module.exports = {
  up: function(migration, DataTypes) {
    migration
      .createTable('Probes', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
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

  down: function(migration, DataTypes, done) {
    migration
      .dropTable('Probes');
  }
};
