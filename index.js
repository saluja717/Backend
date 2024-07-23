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
       origin:'https://frontend-chi-black.vercel.app',
       credentials:true
    })
)

app.use("/insert", InsertData);
app.use("/", GetData);
app.use("/auth", Auth)

dbConnect()

app.listen(4000, () => {
    console.log("Server Started")
})
