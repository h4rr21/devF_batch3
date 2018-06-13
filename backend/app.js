const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.send('bienvenido humanoide');
});

app.get('/name', (req, res, next) => {
	res.send({nomre:'h4rry', apellido:'potter', apodo:'el h4rry'});
});

app.get('/edad', (req, res, next) =>{
	res.send('<br><h1>25</h1>');
})

app.get('/profesion', (req, res, next) => {
	res.send('piloto de drones')
})

app.get('/descripcion', (req, res, next) => {
	res.send('aprendí a usar hackertype.net y es lo <br> que hago en mi officina en IBM, durante mis 8 horas laborales al día')
})

app.get('/proposito', (req, res, next) => {
	res.send('para no estar solo en mi casa')
})

app.listen(3000,()=>{
	console.log('Server runs on port 3000');
});

