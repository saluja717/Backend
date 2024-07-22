const express = require("express")
const dbConnect = require("./db/db")
const InsertData = require("./routes/data_insertion")
const GetData = require("./routes/get_data")
const Auth = require("./routes/auth")
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
    cors({
        origin:"https://frontend-lemon-rho-68.vercel.app/",
        credentials:true,
    })
)

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'https://frontend-opal-theta.vercel.app/');
   // res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use("/insert", InsertData);
app.use("/", GetData);
app.use("/auth", Auth)

app.listen(4000, () => {
    dbConnect()
    console.log("Server Started")
})
