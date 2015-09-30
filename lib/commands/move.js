"use strict";

var MoveCommand = (function() {
    var vm = {};
    vm.movement = ['up', 'down', 'left', 'right'];

    function MoveCommand ( command, probe ) {
        this.command = command;
        this.probe = probe;
    };

    MoveCommand.prototype.run = function() {
        if ( vm.movement.indexOf( this.command[1] ) == -1 ) {
            return;
        }

        switch ( this.command[1] ) {
            case vm.movement[0]:
                this.probe.x++;
                console.log( this.probe.x );
                break;
            case vm.movement[1]:
                this.probe.x--;
                break;
            case vm.movement[2]:
                this.probe.y--;
                break;
            case vm.movement[3]:
                this.probe.y++;
                break;
        }

        return this.probe;
    };

    return MoveCommand;

}());

module.exports = MoveCommand;