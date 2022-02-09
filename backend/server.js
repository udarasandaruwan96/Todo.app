const express =require('express')
const connect = require('./database/connection')
//const User = require("./model/schema");

require('dotenv').config({path: "./config.env"});
const PORT = process.env.PORT || 8070;

//create express instance
const app =express();
app.use(express.json());

//database connection
connect()

// app.get('/', (req,res)=>{
//     res.send("Server is Running")
// })

//routs
app.use('/api',require('./router/router'));

app.listen(PORT,() =>{
    console.log('Server is running on http://localhost:4000');
});