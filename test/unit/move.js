"use strict";

var assert = require("assert");
var MoveCommand = require('../../lib/commands/move');

describe('commands/move', function() {
    describe('#run()', function() {
        it('should move up', function() {
            var cmd = new MoveCommand(['MOVE', 'up'], { x: 0, y: 0 });
            var probe = cmd.run();
            assert.equal(1, probe.x);
            assert.equal(0, probe.y);
        });
        it('should move down', function() {
            var cmd = new MoveCommand(['MOVE', 'down'], { x: 0, y: 0 });
            var probe = cmd.run();
            assert.equal(-1, probe.x);
            assert.equal(0, probe.y);
        });
        it('should move left', function() {
            var cmd = new MoveCommand(['MOVE', 'left'], { x: 0, y: 0 });
            var probe = cmd.run();
            assert.equal(0, probe.x);
            assert.equal(-1, probe.y);
        });
        it('should move right', function() {
            var cmd = new MoveCommand(['MOVE', 'right'], { x: 0, y: 0 });
            var probe = cmd.run();
            assert.equal(0, probe.x);
            assert.equal(1, probe.y);
        });
    });
});
