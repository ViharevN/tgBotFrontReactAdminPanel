import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" href="/">Bot Admin Panel</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;