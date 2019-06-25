var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});

io.on('connection', function(socket) {
    socket.on('draw', function(data) {
        io.emit('draw', data);
    });
    socket.on('erase', function(data) {
        io.emit('erase', data);
    });
});