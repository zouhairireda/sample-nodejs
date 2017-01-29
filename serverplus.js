var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('Vous êtes à l\'accueil');
	res.end();
});



app.get('/etage/:etagenum/chambre', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	//res.end('Vous êtes à la chambre d\'étage n°' + req.params.etagenum);
	res.render('chambre.ejs', {etage: req.param.etagenum});
});

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page Introuvable');
	//res.send(404, 'Page Introuvable');
});

app.listen(8080);