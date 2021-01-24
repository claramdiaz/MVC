const express = require ("express");
const router = express.router();

const rutasMain = require ("./routes/main.js")
const app = express();

app.listen (3000, () =>{
console.log("Servidor funcionando")});


app.use("/", rutasMain);