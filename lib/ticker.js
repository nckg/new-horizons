"use strict";

var MoveCommand = require('./commands/move');

var Ticker = (function() {
    var vm = {
        connection: null,
        spacecraft: null
    };

    /**
     * @param connection
     * @param spacecraft
     */
    function Ticker ( connection, spacecraft ) {
        vm.connection = connection;
        vm.spacecraft = spacecraft;
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
            id: vm.spacecraft.id,
            pos: { x: vm.spacecraft.x, y: vm.spacecraft.y }
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
                var cmd = new MoveCommand( command, vm.spacecraft );
                cmd.run();
                break;
        }
    };

    return Ticker;
}());

module.exports = Ticker;