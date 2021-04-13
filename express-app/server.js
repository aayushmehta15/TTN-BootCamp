const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

let users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: "Apt. 556",
        city: "Gwenborough",
        phone: "1-770-736-8031 x56442",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: "Suite 879",
        city: "Wisokyburgh",
        phone: "010-692-6593 x09125",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: "Suite 847",
        city: "McKenziehaven",
        phone: "1-463-123-4447",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: "Apt. 692",
        city: "South Elvis",
        phone: "493-170-9623 x156",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: "Suite 351",
        city: "Roscoeview",
        phone: "(254)954-1289",
    },
];
app.use(cors());

app.get("/", (req, res) => {
    res.send(users);
});

app.get("/:phone", (req, res) => {
    // console.log(req.url);
    // console.log(req.params);
    // console.log(req.params.id);
    users = users.filter(user => user.phone != req.params.phone);
    res.sendStatus(200);
    console.log("Data Deleted...");
});

const user_created = (req, res, next) => {
    req.user_created_on = new Date();
    next();
};

app.post("/adduser", user_created, (req, res) => {
    users.push(req.body);
    res.sendStatus(200);
    console.log(req.user_created_on);
});

// app.get("/about", (req, res) => {
//     res.send(`Welcome to About us`);
// });

app.listen(9000, () => console.log("Server is listening at localhost://9000"));
