fs.writeFile("temp.txt","Welcome to the jungle",function(error){
    if(error){console.log("Error",error);}
    else{console.log("file created");}
});