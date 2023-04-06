import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = (props) => {
    return (
        <div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink  to="/stat">Статистика. Управление</NavLink></div>
            <div className={styles.item}><NavLink to='/users'>Пользователи</NavLink></div>
            <div className={styles.item}><NavLink to='/dogs'>Собаки</NavLink></div>
            <div className={styles.item}><NavLink to='/cats'>Кошки</NavLink></div>
            <div className={styles.item}><NavLink to='/botSettings'>Управление ботом</NavLink></div>
            <div className={styles.item}><NavLink to='/settings'>Настройки</NavLink></div>
        </div>
    );
};

export default SideBar;

