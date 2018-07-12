const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

var port = 5000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var  points=[]

io.on('connection',(socket)=>{
    console.log('tenemos un batillo conectado');
    points.forEach(onldPoint=>{
        socket.emit('point_added',onldPoint);
    })

    socket.on('add_point',(point)=>{
        points.push(point);
        console.log('alguien agregó un punto: ',point);
        io.sockets.emit('point_added',point);
        // socket.emit('point_added',{x:point.x,y:point.y});
    });

    socket.on('disconnect',()=>{
        console.log('alguien se ha ido');
    });
});

server.listen(port, ()=>{
    console.log('Server listenning on port: '+port)
})