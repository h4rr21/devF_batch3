const express = require('express');
const app = express();
const images = require('./routes/images')
const cors = require('cors');

app.use(cors());
app.use('/images',images);

app.listen(5000,()=>{
	console.log('Server runs on port 5000');
});