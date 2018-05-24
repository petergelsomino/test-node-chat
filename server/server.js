const path = require('path'); // dont need to instal
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);  //get back web socket server emiting or listening to events

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log("New User connected");;

		socket.on('disconnect', () => {
			console.log('User was disconnected');
		});

});
server.listen(port, () => {
	console.log(`Chat app is up on port ${port}`);
});

module.exports = {app};