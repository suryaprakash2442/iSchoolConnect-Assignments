const { deepStrictEqual } = require("assert");
const { clear } = require("console");
var fs = require("fs");

// the following can by sync or async
// write file
// read file
// watch file

// fs.writeFileSync("temp.txt","Welcome to the jungle");clear
// fs.writeFile("temp.txt","Welcome to the jungle",function(error){
//     if(error){console.log("Error",error);}
//     else{console.log("file created");}
// });

fs.readFile("temp.txt","utf-8",function(err, data){
    if(err){console.log("Error ",err)}
    else{console.log(data)}
});

// append a quote to a text file and watch for the change

fs.watchFile("temp.txt",function(curr,prev){
    console.log(curr, prev, "file changed");
});

setTimeout(function(){
    fs.appendFileSync("temp.txt"," \n Hello there ","utf-8");
},4000)
