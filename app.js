const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require('morgan');


const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");

const { sequelize } = require("./models");
const indexRouter = require("./routes");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");

dotenv.config();
passportConfig();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

const app = express();
app.use(cors(corsOptions));
app.set("port", process.env.PORT || 3000);
app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => console.log("데이터베이스 연결 성공"))
  .catch((err) => console.error(err));

app.use(
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(process.env.SECRET),
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(500)
    .json(
      response.responseFromData(
        resTEXT.RESPONSE_TEXT.FAIL,
        resTEXT.RESPONSE_TEXT.PERMISSION_DENIED,
        err
      )
    );
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
