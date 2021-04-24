const UserService = require("../services/service");

const addUser = async (req, res) => {
    // console.log(req.body);
    const response = await UserService.addUser(req.body);
    //checking if signup correctly
    response !== undefined ? res.redirect("/") : res.redirect("/signup");
};

// const checkUserAuth = async (req, res) => {
//     // console.log(req.body);
//     const response = await UserService.checkUserAuth(req.body);

//     if (response === true) {
//         res.render("profile.ejs");
//     } else {
//         res.redirect("/");
//     }
// };

module.exports = { addUser };
