new-horizons
============
Explore the galaxy. A game inspired by [Kepler](https://github.com/chrislloyd/kepler).

[![Build Status](https://travis-ci.org/nckg/new-horizons.svg)](https://travis-ci.org/nckg/new-horizons)

## Todo
- ~~Land on planet~~
- ~~Implement movement system~~
- Implement planet discovery
- Show other probes in the vicinity
- ...

## Run
Run the server by using `npm start`. You can now connect to to server.

You start playing the game by connecting to a websocket server. When you connect to the server, your probe is put inside the galaxy on a random coordinate and the game begins.

    ws://127.0.0.1:8080

### Events
Once you've connected to the server, you'll start recieving events.

### Commands
You can send commands to control your probe through the websocket you are connected to. Like events, these commands should be serialized using JSON. All commands are a list with the first element being the command, and the remaining elements being arguments to that command.

| Name | Argument | Description | Example |
|------|----------|-------------|---------|
| MOVE | "up", "down", "left", "right" | Moves your probe by 1 coordinate in the given direction. | ["MOVE", "up"] |

## Tests
You can run tests by executing `npm test`.