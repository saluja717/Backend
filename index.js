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

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://your-frontend.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.use(
    cors({
        origin: "https://frontend-lemon-rho-68.vercel.app/",
        credentials: true
    })
)


app.use("/insert", InsertData);
app.use("/", GetData);
app.use("/auth", Auth)

app.listen(4000, () => {
    dbConnect()
    console.log("Server Started")
})
