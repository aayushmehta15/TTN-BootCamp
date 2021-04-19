const itemService = require("../services/service");

const getAllItems = async (req, res) => {
    const response = await itemService.getAllItems();
    res.send(response);
};

const addItems = async (req, res) => {
    const response = await itemService.addItems(req.body);
    res.send(response);
};

const updateItem = async (req, res) => {
    const response = await itemService.updateItems(req.params, req.body);
    res.send(response);
};

const deleteItem = async (req, res) => {
    const response = await itemService.deleteItem(req.params);
    res.send(response);
};

module.exports = { addItems, getAllItems, updateItem, deleteItem };
