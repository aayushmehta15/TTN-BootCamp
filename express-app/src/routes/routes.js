const express = require("express");
const passport = require("../config/passport");
const router = express.Router();
const UserController = require("../controllers/controller");

// SignUp Pages
router.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

router.post("/signupBtn", UserController.addUser);

// Login Pages
router.get(["/", "/login"], (req, res) => {
    res.render("login.ejs");
});

router.post(
    "/loginBtn",
    passport.authenticate("local", {
        failureRedirect: "/",
        successRedirect: "/profile",
        session: false,
    })
);

router.get("/profile", (req, res) => {
    res.render("profile.ejs");
});

// FaceBook routes sign in and signup
router.use("/auth/facebook", passport.authenticate("facebook"));
router.use(
    "/auth/facebook",
    passport.authenticate("facebook", {
        failureRedirect: "/",
        successRedirect: "/profile",
        session: false,
    })
);

module.exports = router;
