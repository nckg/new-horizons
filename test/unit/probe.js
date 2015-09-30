"use strict";

var expect = require('expect.js');
var models = require('../../lib/models');

describe('models/probe', function() {
    beforeEach(function ( done ) {
        models.sequelize
            .sync({force: true})
            .then(function () {
                done()
            });
        this.Probe = require('../../lib/models').Probe;
    });

    describe('create', function() {
        it('creates a probe', function() {
            return this.Probe
                    .create( { x: 10, y: 20 } )
                    .then(function (probe) {
                        expect( probe.x ).to.equal( 10 );
                        expect( probe.y ).to.equal( 20 );
                    });
        });
    });
});
