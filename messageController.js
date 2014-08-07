var sys = require('sys');
var exec = require('child_process').exec;



var sendMessageResponse;

var sendMessage = function(number, message){

		var commandLineQueryCreated = "python yowsup-cli -c config.example -s " + number + " \"" + message + "\"";   
		sendMessageResponse = exec(commandLineQueryCreated, function(error, stdout, stderr){
			console.log(stdout);
		});

};

exports.sendMessage = sendMessage;