
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = 3000;
const store = require('./app/routes/store');



mongoose.connect("mongodb://localhost:27017/testing-mongo", {
	useNewUrlParser: "true"
});
mongoose.connection.on("error", err => {
	console.log("Error: ", err);
});
mongoose.connection.on("connected", () => {
	console.log("Mongoose is running");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/json' }));

app.get("/", (req, res) => res.json({ message: "Welcome to Home Page" }));

app.route("/store")
	.get(store.getproducts)
	.post(store.postproduct);


app.route("/store/:id")
	.get(store.getproduct)
	.delete(store.deleteproduct)
	.put(store.updateproduct);


app.listen(PORT,()=>console.log("Server Listening at PORT: " + port););

module.exports = app;
