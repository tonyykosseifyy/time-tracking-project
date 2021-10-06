import express from "express" ;
import dotenv from "dotenv" ;
import axios from "axios" ;
import cors from "cors" ;
import data from './data.js' ;
dotenv.config() ;

const app = express() ;

const port = process.env.PORT ;

app.use(express.json()) ;
app.use(cors()) ;

app.get("/api/user" , ( req , res ) => {
    if (!data) return res.status(400).send("Error , Try refreshing the page.") ;
    return res.status(200).send(data) ;
}) ;


app.listen( port , () => {
    console.log(`Server is listening on port ${port}`)
}) ;