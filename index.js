const path = require('path');
const express = require('express');
const app = express();



//Buscando
app.set('port', process.env.PORT || 3000);

//Documentos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar Servidor
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
}); 

 
//websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);


var line_history = [];



io.on('connection', (socket) => {
    console.log('new connection', socket.id);


    socket.on('cambiar-color', data =>{
        line_history.push(data.line);
        io.emit('cambiar-color', {line: data.line});
    });
});