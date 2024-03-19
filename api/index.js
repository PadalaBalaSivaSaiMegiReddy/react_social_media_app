const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet= require('helmet');
const morgan = require('morgan');
const multer  = require('multer');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')




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
const upload = multer({ storage: storage });


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "src/assets");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });


app.post('http://localhost:8800/api/upload', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    try {
        return res.status(200).json("File uploaded successfully");
        
    } catch (error) {
        console.log(error)
    }
  })

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


