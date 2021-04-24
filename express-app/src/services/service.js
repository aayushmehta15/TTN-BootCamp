const UserModel = require("../models/model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = async ({ name, email, password }) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds); // encrypt the password
        const user = await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });
        // console.log(user);
        return user;
    } catch (error) {
        console.log("Error====>", error.message);
        return undefined;
    }
};

module.exports = { addUser };
