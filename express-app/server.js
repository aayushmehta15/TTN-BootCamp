const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const session = require("express-session");
// const ejs = require("ejs");
const passport = require("./src/config/passport");

const routes = require("./src/routes/routes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: "anything" }));

app.use(passport.initialize());
// app.use(passport.session());

app.use(routes);

mongoose.connect("mongodb://localhost:27017/UserData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", err => {
    console.log("error", err);
});

mongoose.connection.on("connected", (err, res) => {
    console.log("Mongoose is connected...");
});

app.listen(PORT, () => console.log("Server is Listening at localhost:", PORT));
