var socket = io("http://localhost:8080/");
    $(document).ready(function(){
        var number, message;
        $("#click").click(function(){
            alert("a");
            number = $("#_number_id").val();
            message = $("#_message_id").val();
            var url="/"+number+"/"+message;
            //console.log(url);
            //window.location.href=url;
            socket.emit("message", number, message);

        });
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
        msg = JSON.parse(msg);
        var rcvdNumber = parseInt(msg.Number,10);
        toastr.info(rcvdNumber+" sent "+msg.Message);
      });



// chrome.webNavigation.onErrorOccurred.addListener(function(details) 
// {
//     console.log("b");
// });