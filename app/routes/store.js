const mongoose = require('mongoose');
const store = require('../models/store');

exports.getproducts=(req, res)=> {
	let query = store.find({});
	query.exec().then((products) => {
		res.json(products);
	}).catch(err => {
		if (err) res.send(err);
	});
}

exports.postproduct=(req, res)=> {
	 newproduct = new store(req.body);
	newproduct.save((err, product) => {
		if (err) {
			res.send(err);
		}
		else {
			res.json({ message: "Product added!", product });
		}
	});
}

exports.getproduct=(req, res)=>{
	store.findById(req.params.id, (err, product) => {
		if (err) res.send(err);
		res.json(product);
	});
	return new Promise(function (resolve) {
		resolve();
	});
}

exports.deleteproduct=(req, res)=> {
	store.remove({ _id: req.params.id }, (err, result) => {
		res.json({ message: "Product deleted!", result });
	});
}

exports.updateproduct=(req, res) =>{
	store.findById({ _id: req.params.id }, (err, product) => {
		if (err) res.send(err);
		Object.assign(product, req.body).save((err, product) => {
			if (err) res.send(err);
			res.json({ message: 'Product updated!', product });
		});
	});
}

function up() {
	return new Promise(function (resolve) {
		resolve();
	});
}
