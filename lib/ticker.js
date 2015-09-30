"use strict";

var MoveCommand = require('./commands/move');

var Ticker = (function() {
    var vm = {
        probe: null
    };

    /**
     * @param connection
     * @param probe
     */
    function Ticker ( probe ) {
        vm.probe = probe;
        this.queue = [];
    }

    /**
     * Gets entities
     *
     * @return {Array}
     */
    Ticker.prototype.getEntities = function() {
        var entities = [];
        entities.push( {
            id: vm.probe.id,
            pos: { x: vm.probe.x, y: vm.probe.y }
        });

        return entities;
    };

    /**
     * Return an update
     *
     * @return {Object}
     */
    Ticker.prototype.getUpdate = function() {
        return {
            type: "tick",
            entities: this.getEntities()
        };
    };

    Ticker.prototype.tick = function() {
        // get first in queue
        var command = this.queue.shift();

        if ( ! command) {
            return;
        }

        // make command
        switch (command[0]) {
            case 'MOVE':
                var cmd = new MoveCommand( command, vm.probe );
                cmd.run();
                break;
        }

        vm.probe.save();
    };

    return Ticker;
}());

module.exports = Ticker;