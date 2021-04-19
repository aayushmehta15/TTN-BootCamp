const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(routes);

mongoose.connect("mongodb://localhost:27017/mongoose-session", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", err => {
    console.log("error", err);
});

mongoose.connection.on("connected", (err, res) => {
    console.log("Mongoose is connected");
});

app.listen(PORT, () => console.log("Server is Listening at localhost:", PORT));
