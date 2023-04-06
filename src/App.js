import React from 'react';
import NavBar from "./layout/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page from "./layout/Page";
import styles from './App.module.css';
import SideBar from "./layout/SideBar";
import User from "./layout/User/User";
import AddUser from "./layout/User/AddUser";
import EditUser from "./layout/User/EditUser";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <div className={styles.main}>
                    <div className={styles.sidebar}><SideBar /></div>
                    <div className={styles.page}>
                        <div className="container">
                            <Routes>
                                <Route path='/users' element={<User />}/>
                                <Route path='/adduser' element={<AddUser />}/>
                                <Route path="/edituser/:id" element={<EditUser />}/>
                            </Routes>
                        </div>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;