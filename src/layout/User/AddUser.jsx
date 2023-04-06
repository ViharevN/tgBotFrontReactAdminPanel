import React, {useState} from 'react';
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";

const AddUser = () => {
    let navigate = useNavigate();

    const [user, setUser]=useState({
        telegramId: "",
        roles: "",
        lastName: "",
        firstName: "",
        description: ""

    });


    const{ telegramId, roles, lastName, firstName, description} = user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/add", user);
        navigate('/users');
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center">Register User</h2>
                    <form onSubmit={(e)=>{onSubmit(e)}}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter Name"
                               name="firstName"
                               value={firstName}
                               onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                            LastName
                        </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter Last Name"
                               name="lastName"
                               value={lastName}
                               onChange={(e)=>onInputChange(e)}/>
                    </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">
                                Roles
                            </label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter Role user"
                                   name="roles"
                                   value={roles}
                                   onChange={(e)=>onInputChange(e)}/>
                        </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter description"
                               name="description"
                               value={description}
                               onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telegramID" className="form-label">
                            TelegramID
                        </label>
                        <input type="text" className="form-control"
                               placeholder="Enter telegramID"
                               name="telegramId"
                               value={telegramId}
                               onChange={(e)=>onInputChange(e)}/>
                    </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <NavLink to='/users'><button type="submit" className="btn btn-outline-danger mx-3">Cancel</button></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;


