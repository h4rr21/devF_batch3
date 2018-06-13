const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const images = [];
// {
// 	id:1,
// 	url:'www.google.com/imagen',
// 	desc: 'la imagen original',
// 	nombre: 'primeraImagen'
// }

router.get('/', (req, res, next) => {
	res.send(images);
})

router.post('/', (req, res, next) => {
	const data = req.body;
	console.log(data);
	images.push(data);
	res.send(data);
})

router.get('/:pos', (req, res, next) => {
	const posicion = req.params.pos;
	res.send(images[parseInt(posicion)]);
})

router.delete('/:pos', (req, res, next) => {
	const posicion = req.params.pos;
	res.send(images.splice(parseInt(posicion),1));
})

module.exports = router;