let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();
let i = 0;
myevent.on("ischoolEvent", function(){
    console.log("iSchool Event Happened"+ ' ' + (i+1));
})

function emitinterval(){

        setInterval(function(){
            if(i<5){
                myevent.emit("ischoolEvent");
            }else{
                console.log("The process is complete");
                clearInterval(this)
            }
            i++;
        },2000);

        }

emitinterval()
