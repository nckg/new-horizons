"use strict";

var expect = require('expect.js');
var Ticker = require('../../lib/ticker');
var models = require('../../lib/models');

describe('ticker', function() {
    var that = this;
    beforeEach(function ( done ) {
        models.sequelize
            .sync({force: true})
            .then(function () {
                models.Probe
                        .create( { x: 10, y: 20 } )
                        .then(function (probe) {
                            that.Probe = probe;
                            done();
                        });
            });
    });

    describe('#tick()', function() {
        it('should tick without errors', function() {
            var ticker = new Ticker(that.Probe);
            ticker.queue.push(['MOVE', 'up']);
            ticker.tick();
            expect( ticker.queue.length ).to.equal( 0 );
        });
    });


});