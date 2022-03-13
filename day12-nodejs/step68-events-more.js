let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("ischoolEvent", function(){
    console.log("iSchool Event Happened");
})

setTimeout(function(){
    myevent.emit("ischoolEvent");
},n);


// create an event that gets called once every 2 seconds for 5 times
// then add "process complete" at the end
