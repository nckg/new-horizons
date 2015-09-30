"use strict";

var Planet = function ( sequelize, DataTypes ) {
    var Planet = sequelize.define( 'Planet', {
        x: DataTypes.FLOAT,
        y: DataTypes.FLOAT
    } );

    return Planet;
};

module.exports = Planet;