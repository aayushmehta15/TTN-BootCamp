import React, { useEffect, useState } from "react";
import axios from "axios";
const UserTableComp = props => {
    const [apiResponse, setApiResponse] = useState([]);

    const callExpressApi = () => {
        axios
            .get("http://localhost:9000/")
            .then(response => {
                setApiResponse(response.data);
                console.log(response.data);
            })
            .catch(err => err);
        console.log(apiResponse);
    };

    const onDeleteUserHandler = phone => {
        let updatedUserList = apiResponse.filter(user => user.phone !== phone);
        setApiResponse(updatedUserList);
        axios
            .get(`http://localhost:9000/${phone}`)
            .then(response => console.log(response))
            .catch(error => error);
    };

    useEffect(() => {
        callExpressApi();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {apiResponse.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.phone}</td>
                            <td onClick={() => onDeleteUserHandler(user.phone)}>
                                Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTableComp;
