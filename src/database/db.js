//importando a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();
//create object database
const db = new sqlite3.Database("./src/database/database.db")

//utilizando object database
db.serialize(()=>{
//Create
/*
db.run(`
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`)

*/
//Insert
/*
const query = `
INSERT INTO places (
    image,name,address,address2,state,city,items
) VALUES (
    ?,?,?,?,?,?,?);

`
const values = [
    "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "PapperSide",
    "Guilherme gembala, Jardim America",
    "Nº200",
    "Santa Catarina",
    "Rio do Sul",
    "Residuos, Eletronicos, Lampadas"
]

function afterInsertData(err){
    if(err){
        return console.log(err);
    }
    console.log("cadastrado com sucesso")
    console.log(this)
}

db.run(query,values,afterInsertData)
*/
//Query
/*
db.all(`
SELECT * FROM places
`, function(err,rows){
    if(err){
        return console.log(err);
    }
    console.log("Register")
    console.log(rows)
})
*/


//Delete
/*db.run(`
    DELETE FROM places WHERE id=?
`,[1], function(err){
    if(err){
        return console.log(err);
    }
    console.log("registro deletado com sucesso")
})

*/



})

module.exports = db;





