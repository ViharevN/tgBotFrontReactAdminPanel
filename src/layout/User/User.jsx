import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    }, [])

    const loadUsers=async (props)=>{
        const result=await axios.get("http://localhost:8080/api/v1/all");
        setUsers(result.data)
    }

    return (
        <div>
            <div className="container">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">telegramID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Roles</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.telegramId}</td>
                                <td>{user.roles}</td>
                                <td>{user.description}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">View</button>
                                    <NavLink to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">Edit</NavLink>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    }


                    </tbody>
                </table>
            </div>
            <NavLink to='/adduser'><button className="btn btn-outline-dark">Add User</button></NavLink>
        </div>


    );
};

export default User;