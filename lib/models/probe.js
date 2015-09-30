"use strict";

var Probe = function ( sequelize, DataTypes ) {
    var Probe = sequelize.define( 'Probe', {
        name: DataTypes.STRING,
        x: DataTypes.FLOAT,
        y: DataTypes.FLOAT
    } );

    return Probe;
};

module.exports = Probe;