'use strict';

var WebSocketServer = require('websocket').server;
var http = require('http');
var models = require('./lib/models');
var Ticker = require('./lib/ticker');


models.sequelize.sync({force: true}).then(function () {
  init();
});

function init() {
    var wsServer = new WebSocketServer({
        httpServer: server
    });

    wsServer.on('request', function(request) {
        // Create a new planet
        models.Planet
            .create( {
                x: generateRandomNumber(),
                y: generateRandomNumber()
            })
            .then(function( planet ) {
                console.log( "Created planet at " + this.x + ":" + this.y );

                // Create a new spaceship
                models.SpaceCraft
                    .create( {
                        x: planet.get( 'x' ),
                        y: planet.get( 'y' )
                    } )
                    .then(function ( spacecraft ) {
                        var connection = request.accept('echo-protocol', request.origin);
                        console.log((new Date()) + ' Connection accepted.');

                        var ticker = new Ticker( connection, spacecraft );

                        connection.on( 'message', function( message ) { onMessage.apply( arguments, [ message, ticker ] ); } );
                        // connection.on('close', onClose );

                        function sendUpdate () {
                            if (! connection.connected) {
                                return false;
                            }

                            ticker.tick();
                            console.log( ticker.getUpdate() );
                            connection.sendUTF(JSON.stringify(ticker.getUpdate()));
                            setTimeout(sendUpdate, 1000);
                        }

                        sendUpdate();
                    });
            });

    });
}

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

function generateRandomNumber() {
    var min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;

    return (Math.random() * max) + min;
};

function onMessage ( message, ticker ) {
    try {
        if (message.type === 'utf8') {
            var cmd = JSON.parse( message.utf8Data );
            ticker.queue.push( cmd );
        }
    } catch ( err ) {
        console.log( err );
    }
}

function onClose ( reasonCode, description ) {
    console.log((new Date()) + ' Peer ' + this.remoteAddress + ' disconnected.');
}