"use strict";

var SpaceCraft = function ( sequelize, DataTypes ) {
    var SpaceCraft = sequelize.define( 'SpaceCraft', {
        name: DataTypes.STRING,
        x: DataTypes.FLOAT,
        y: DataTypes.FLOAT
    } );

    return SpaceCraft;
};

module.exports = SpaceCraft;