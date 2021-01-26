const express = require ("express");

const rutasMain = require ("./routes/main.js");
//al importar un router no es necesario poner la extensión del archivo

const app = express();

app.use(express.static(__dirname + '/public'));


app.set ("view engine", "ejs");



app.use("/", rutasMain);



app.listen (3000, () =>{
    console.log("Servidor funcionando")});
    