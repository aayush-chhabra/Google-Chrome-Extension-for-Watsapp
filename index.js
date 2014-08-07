var messageController = require("./messageController.js");
var prompt = require("prompt");


console.log("Enter the number with the country code and the message: ");
prompt.start();
prompt.get(["number","message"], function(err, result){
	messageController.sendMessage(result.number,result.message);
});

