 var express = require("express");
 var app = express();
 var port = 3000;
var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


//   const mongoose = require('mongoose/browser');
//     mongoose.Promise = global.Promise;
//     mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


// var nameSchema = new mongoose.Schema({ 
 
//  id: String,
//  internalDate: Number , 
//  labelIds:Object,
//  payload:Object,
//  raw: Number,
//  sizeEstimate: Number,
//  snippet: String,
//  threadId: String,

// });

// var Message = mongoose.model("Message", nameSchema);


// var Message1 = new Message(messages);

//  var saveMessage = Message1.save(function (err, Message1) {
//      if (err) return console.error(err);
//      console.log("saved");
//      console.log(Message1);
//    });
//  assert.ok(saveMessage instanceof Promise);

//  // return new Promise((resolve, reject) => {
//  //  Message.find(function (err, Message) {
//  //    if (err) return console.error(err);
//  //   console.log(Message);
//  //  })
//    })

 app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});
 
app.get("localhost:3000/", (req, res) => {


});
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

