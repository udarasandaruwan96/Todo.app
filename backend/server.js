const express =require('express')

require('dotenv').config({path: "./config.env"});
const PORT = process.env.PORT || 8070;

//create express instance
const app =express();
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("Server is Running")
})

app.listen(PORT,() =>{
    console.log('Server is running on http://localhost:4000');
})