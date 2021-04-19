const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    isSanitized: { type: Boolean },
    unit: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
        default: null,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updateDate: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        enum: [
            "Grocery",
            "Medical",
            "Fruits&Veg",
            "Berverages",
            "Babycare",
            "Cleaning",
        ],
    },
    location: {
        type: String,
        enum: ["Store", "Kitchen"],
    },
});

ItemSchema.pre("print", function () {
    console.log("mongodb document created pre hook");
});

const ItemModel = mongoose.model("inventory", ItemSchema);

module.exports = { ItemModel };
