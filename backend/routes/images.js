const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const models = require('../db/models')

router.use(bodyParser.json());

// {
// 	id:1,
// 	"url":"www.google.com/imagen",
// 	"desc": "la imagen original",
// 	"nombre": "primeraImagen"
// }

router.get('/', (req, res, next) => {
	models.Images.findAll().then((allImages) => {
		res.send(allImages);
	})
})

router.post('/', (req, res, next) => {
	const data = req.body;
	models.Images.create(data).then((singleImage) => {
		res.send(singleImage);
	})
})

router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	models.Images.findById(id).then((image)=>{
		res.send(image);
	});
})

router.put('/:id', (req, res, next) => {
	const data = req.body;
	const id = req.params.id;

	models.Images.findById(id).then((images) => {
		image.update(data).then((image)  =>{
			res.send(image);
		})
	})
})

// router.delete('/:pos', (req, res, next) => {
// 	const posicion = req.params.pos;
// 	res.send(images.splice(parseInt(posicion),1));
// })

module.exports = router;