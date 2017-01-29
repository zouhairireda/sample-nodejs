var http = require('http');
var url = require('url');
var querystring = require('querystring');
var test = require('test');

test.sayHello();

//emit events
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

jeu.on('gameover', function(message1, message2) {
	console.log(message1 + " " + message2);
});

jeu.on('gameover', function(message1, message2) {
	console.log(message1 + " " + message2);
});

jeu.emit('gameover', "test1", "test2");


var server = http.createServer(function(req, res) {
	//var page = url.parse(req.url).pathname;
	res.writeHead(200, {"Content-Type": "text/plain"});
	var params = querystring.parse(url.parse(req.url).query);
	if('prenom' in params && 'nom' in params) {
		res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom'] + ' ' + params.nom);
	} else {
		res.write('What is your first and last name ?');
	}
	res.end();
	/*if(page=='/') {
		res.write('Page d\'accueil');
	} else if(page == '/test') {
		res.write('test');
	} else {
		res.write('NOOOOOO');
	}*/
	//res.write('<!DOCTYPE html><html><head><title></title></head><body><p>Test <strong>Hello World</strong></p></body></html>');
	//console.log(url.parse(req.url).query);
	/*var params = querystring.parse(url.parse(req.url).query);
	console.log(params['id']);*/
});
server.on('request', function() {
	console.log('REQUEST');
});
server.on('close', function() {
	console.log('GOOD BYE');
});

server.listen(8080);

//server.close();