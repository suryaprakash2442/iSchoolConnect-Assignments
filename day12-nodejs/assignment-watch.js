var fs = require("fs");

fs.watchFile("temp.txt",function(){
    console.log("new line added");
})
function afs(){
    fs.writeFileSync("temp.txt"," Added new line","utf-8")
}
setInterval(afs,5000)