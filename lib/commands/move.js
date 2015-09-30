"use strict";

var MoveCommand = (function() {
    var vm = {};
    vm.movement = ['up', 'down', 'left', 'right'];

    function MoveCommand ( command, spaceship ) {
        this.command = command;
        this.spaceship = spaceship;
    };

    MoveCommand.prototype.run = function() {
        if ( vm.movement.indexOf( this.command[1] ) == -1 ) {
            return;
        }

        switch ( this.command[1] ) {
            case vm.movement[0]:
                this.spaceship.x++;
                console.log( this.spaceship.x );
                break;
            case vm.movement[1]:
                this.spaceship.x--;
                break;
            case vm.movement[2]:
                this.spaceship.y--;
                break;
            case vm.movement[3]:
                this.spaceship.y++;
                break;
        }

        this.spaceship.save();
    };

    return MoveCommand;

}());

module.exports = MoveCommand;