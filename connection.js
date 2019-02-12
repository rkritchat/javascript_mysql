let mysql = require('mysql')
let con = mysql.createConnection({
    host : "172.17.0.2",
    port : "3306",
    user : "root",
    password : "root",
    database:'test'
});

con.connect(e=>{
    if(e) throw e
    console.log('connected..')
    con.query('SELECT * FROM user', (e, result)=>{
        if(e) throw e
        console.log(result[0])
    });
});