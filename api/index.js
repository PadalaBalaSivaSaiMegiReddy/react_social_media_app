const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
 
app.use(cors());
app.use(express.json());
dotenv.config()

mongoose.connect().then(()=>{
    console.log("connected to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening to ${process.env.PORT}`)
    })
}).then((err)=>{
    console.log(err);
})



