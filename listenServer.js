var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var messageController = require("./messageController");
var Notification = require('node-notifier');
var notifier = new Notification();

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.redirect('index.html');
// });


app.get("/:number/:message", function(req, res){

    messageController.sendMessage(req.params.number,req.params.message);
    res.writeHead(200);
    res.end("send!!");         
});

app.post("/hello", function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        //console.log(body);
        body = JSON.parse(body);
        body = parseInt(body.Number) + " : " +body.Message;
        console.log(__dirname+"/public");
        notifier.notify({
            "title": "WatsApp!!",
            "message": body,
            "appIcon": __dirname + "/public/icon.png"
        }, function(error, response){
            console.log(error, response);
        });
        io.emit("chat message", body);
        res.writeHead(200);
        res.end("Server got the message.");

     });
});


io.on('connection', function(socket){
    socket.on('message', function(number, message){
        messageController.sendMessage(number,message);
    });
});

io.on("message", function(number, message){
    //console.log(number, message);
    a();
})


function a(){
    console.log("in fuction a");
}


http.listen(8080, function(){
  console.log('listening on *:8080');
});

