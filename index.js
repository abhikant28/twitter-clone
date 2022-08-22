require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");

const initializePassport = require("./config/auth");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "akdfjlkadf548451asdfasj",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

app.use("/auth", require("./routes/auth"));
app.use("/tweet", require("./routes/tweet"));
app.use("/", require("./routes/index"));

app.listen(8000, () =>
  console.log(`Server is running on port 8000`)
);
