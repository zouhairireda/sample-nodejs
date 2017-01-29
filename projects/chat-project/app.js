var express = require('express');
var fs = require('fs');
var http = require('http');

var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent');

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket, pseudo) {

	socket.on('new_connection', function(pseudo) {
				console.log(pseudo);

		pseudo = ent.encode(pseudo);
		socket.pseudo = pseudo;
		socket.broadcast.emit('new_connection', pseudo);

	});

	socket.on('message', function(message) {
				console.log(message);

		message = ent.encode(message);
		socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
	});
});

server.listen(9990);