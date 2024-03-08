const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet= require('helmet');
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')


const app = express();
dotenv.config()

//connection

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening to ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})

//middlewares 
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

