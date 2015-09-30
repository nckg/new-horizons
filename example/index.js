var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log( message.utf8Data );
            connection.send( JSON.stringify( ["MOVE", "up"] ) );
        }
    });
});

client.connect('ws://127.0.0.1:8080', 'echo-protocol');