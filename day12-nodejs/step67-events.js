let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();



function ischoolHandler1(event){
    console.log("iSchoolEvent Happened", event);
};
function ischoolHandler2(event){
    console.log("iSchoolEvent Happened", event);
};
function yschoolHandler1(event){
    console.log("ySchoolEvent Happened", event);
};
// console.log(myevent.listenerCount("ischoolevent"));


myevent.on("ischoolevent", ischoolHandler1);
myevent.on("ischoolevent", ischoolHandler2);
myevent.on("yschoolevent", yschoolHandler1);

console.log(myevent.eventNames());

myevent.emit("ischoolevent",{ time : new Date(), message : "Hello iSchool"});
myevent.emit("yschoolevent",{ time : new Date(), message : "Hello iSchool"});

