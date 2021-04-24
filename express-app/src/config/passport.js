const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const bcrypt = require("bcrypt");
const UserModel = require("../models/model");

const secret = require("./appSecrets");

const checkPassword = async (password, hashedPassword) => {
    const authpass = await bcrypt.compare(password, hashedPassword);
    if (authpass) {
        // console.log(authpass); // true or false
        return authpass;
    } else {
        return false;
    }
};

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        UserModel.findOne({ email: email }, async (err, user) => {
            if (err) {
                // return done(err);
                return done(new Error("Not a Valid User."));
            }

            if (!user) {
                return done(null, false);
            }

            let passwordChecker = await checkPassword(password, user.password);
            // console.log(passwordChecker);
            if (!passwordChecker) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        });
    })
);

passport.use(
    new FacebookStrategy(
        {
            clientID: secret.FACEBOOK_APP_ID,
            clientSecret: secret.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:3000/auth/facebook/callback",
        },
        function (accessToken, refreshToken, profile, cb) {
            console.log(profile);
            UserModel.findOneAndUpdate(
                { email: profile.email },
                {
                    name: profile.id,
                    email: profile.email,
                    password: profile.id,
                },
                {
                    upsert: true,
                }
            );
        }
    )
);

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

module.exports = passport;
