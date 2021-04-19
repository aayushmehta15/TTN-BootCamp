const { ItemModel } = require("../model/ItemModel");

const addItems = async data => {
    try {
        const Items = await ItemModel.findOneAndUpdate(
            { name: data.name },
            data,
            { upsert: true }
        );
        console.log();
        return Items;
    } catch (err) {
        return err;
    }
};

const getAllItems = async () => {
    const Items = await ItemModel.find();
    return Items;
};

const updateItem = async (id, data) => {
    console.log(id);
    const Items = await ItemModel.update({ _id: id.id }, data);
    return Items;
};

const deleteItem = async id => {
    const res = await ItemModel.deleteOne({ _id: id.id });
    return res;
};

module.exports = { addItems, getAllItems, updateItem, deleteItem };
