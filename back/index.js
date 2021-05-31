
require("./config/db");
const express =require ("express")
const morgan = require ("morgan")
const routes = require("./routes");


const app=express()

// Logger para mostrar todos los request que llegan al servidor
app.use(morgan("dev"))


app.use (express.json())
app.use (express.urlencoded({extended:true}))

app.use("/api", routes);

app.listen (8080, ()=>console.log ("listening on port 8080"))
