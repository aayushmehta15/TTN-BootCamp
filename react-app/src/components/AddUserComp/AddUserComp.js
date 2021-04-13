import axios from "axios";
import React, { useState } from "react";
import classes from "./AddUserComp.module.css";

const AddUserComp = () => {
    const [addNewUser, setAddNewUser] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        city: "",
        phone: "",
    });

    const addUser = event => {
        event.preventDefault();
        console.log("hello");
        axios
            .post("http://localhost:9000/adduser", addNewUser)
            .then(response => {
                console.log(response);
            })
            .catch(err => err);
    };

    const inputChangeHandler = (event, type) => {
        let newStateUser = { ...addNewUser };
        newStateUser[type] = event.target.value;
        setAddNewUser(newStateUser);
        // console.log(addNewUser);
    };

    return (
        <div>
            <h1>Add User</h1>
            <form className={classes} onSubmit={addUser}>
                <input
                    type="text"
                    value={addNewUser.name}
                    placeholder="Name"
                    required
                    onChange={event => inputChangeHandler(event, "name")}
                />
                <br />
                <br />
                <input
                    type="text"
                    value={addNewUser.username}
                    placeholder="User Name"
                    required
                    onChange={event => inputChangeHandler(event, "username")}
                />
                <br />
                <br />
                <input
                    type="email"
                    value={addNewUser.email}
                    placeholder="Email"
                    onChange={event => inputChangeHandler(event, "email")}
                />{" "}
                <br />
                <br />
                <input
                    type="text"
                    value={addNewUser.address}
                    placeholder="Address"
                    onChange={event => inputChangeHandler(event, "address")}
                />{" "}
                <br />
                <br />
                <input
                    type="text"
                    value={addNewUser.city}
                    placeholder="City"
                    onChange={event => inputChangeHandler(event, "city")}
                />{" "}
                <br />
                <br />
                <input
                    type="number"
                    value={addNewUser.phone}
                    placeholder="Phone"
                    onChange={event => inputChangeHandler(event, "phone")}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUserComp;
