let mysql = require("mysql");


let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "ischooldb",
    password : ""
});

connection.connect(function(error){
    if(error){
        console.log("Error ", error)
    }else{
        
// CREATING TABLE IN DB
        // let sql = "CREATE TABLE participants (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300))";

        // connection.query(sql, function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Result ",result)}
        // })
        // 
// INSERTING VALUES IN DB
        // let sql = "INSERT INTO participants (name, email) VALUES ('Surya', 'surya@gmail.com')";

            // connection.query(sql, function(error,result){
            //     if(error){console.log("Error ",error)}
            //     else{console.log("Result ",result)}
            // })


// multiple entries
        // let heroes = [
        //     ["Clark","clark@kent.com"],
        //     ["Bruce","bruce@wayne.com"],
        //     ["Peter","peter@parker.com"]
        // ];

        // let sql = "INSERT INTO participants (name, email) VALUES ?"

        // connection.query(sql,[heroes],function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })
// alternate way ^
        // let sql = "INSERT INTO participants (name, email) VALUES ('Kit', 'kit@walker.com'),('Bruce', 'bruce@banner.com'), ('Natasha', 'natasha@romanoff.com')";

        // connection.query(sql,function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })
// query data in the database
        // let sql = "SELECT * FROM participants WHERE id = 1";
        // connection.query(sql,function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{
        //         console.log("Response ", result);
        //         // result.forEach(recordSet => {
        //         //     console.log(recordSet.name);;
        //         // });
        //     }
        // })

// quert all records above 5
        // let sql = "SELECT * FROM participants WHERE id > 5"
        // connection.query(sql,function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{
        //         console.log("Response ", result);
        //     }
        // })

// query all records below 5
        // let sql = "SELECT * FROM participants WHERE id < 5"
        // connection.query(sql,function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{
        //         console.log("Response ", result);
        //     }
        // })

// query alternate records
        // let sql = "SELECT * FROM participants WHERE id %2 = 0"
        // connection.query(sql,function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{
        //         console.log("Response ", result);
        //     }
        // })

// CREATING NEW TABLE
//         let sql = "CREATE TABLE abilities (ability VARCHAR(256) PRIMARY KEY, id INT)";

//         connection.query(sql, function(error,result){
//             if(error){console.log("Error ",error)}
//             else{console.log("Result ",result)}
//         })

// INSERTING INTO NEW TABLE
        // let data = [
        //     ["nothing", 1],
        //     ["flying", 2],
        //     ["money", 3],
        //     ["web", 4],
        //     ["brain", 5],
        //     ["smash", 6],
        //     ["fight", 7]
        // ];

        // let sql = "INSERT INTO abilities (ability, id) VALUES ?"
        // connection.query(sql,[data],function(error,result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })

// JOINS
        // let sql = "SELECT participants.name, abilities.ability FROM participants INNER JOIN abilities ON participants.id=abilities.id; "

        // connection.query(sql, function(error, result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })


// ADDING COLUMN
        // let sql = "ALTER TABLE participants ADD universe VARCHAR(256)"

        // connection.query(sql, function(error, result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })


// creating view
        // let sql = "CREATE VIEW dcheroes AS SELECT p.name, p.universe FROM participants as p WHERE universe = 'dc' "

        // connection.query(sql, function(error, result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })

// calling view
        // let sql = "SELECT * FROM dcheroes"

        // connection.query(sql, function(error, result){
        //     if(error){console.log("Error ",error)}
        //     else{console.log("Response ", result)}
        // })




    } 
})  



/*
query all records above 5
query all records below 5
query alternate records
join
views

create a crud application with MySQL and express
*/