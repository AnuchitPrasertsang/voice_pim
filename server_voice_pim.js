var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

var mc = require("mac-control");
var clipboard = require("copy-paste");
app.listen(3000);

function handler (request, response) {
    var file = __dirname + (request.url == '/' ? '/index.html' : request.url);
    fs.readFile(file, function(error, data) {
        if (error) {
            response.writeHead(500);
            return response.end('Error loading index.html');
        }
        response.writeHead(200);
        response.end(data, 'utf-8');
    });
}
mc.keyPress("enter");
io.sockets.on('connection', function (socket) {
  socket.on('voice_text', function (data) {
    copy(data.voice,function(){
      console.log(">>> "+paste()+"\n");
      mc.keyPress(["command","v"]);
    });
  });
});