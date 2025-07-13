import React, { useState } from 'react';
import burger from '../../images/icon-hambur.png';
import style from './NavBar.module.css';
import logo from "../../images/crediplus.png"



const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(prev => {
            const newState = !prev;
            if (newState) {
                document.body.classList.add('menu_active');
            } else {
                document.body.classList.remove('menu_active');
            }
            return newState;
        });
    };

    return(
        <nav className={style.nav}>
            <div 
                className={`${style.toggle_menu} ${menuActive ? style.fixed_position : ''}`}
                onClick={toggleMenu}>
                <label htmlFor="toggle_menu_check">
                    <img src={burger} alt="icon" />
                </label>
            </div>
            <div className={style.nav_logo}>
                <a href="/home" className={style.nav_logo_i}>
                    <img src={logo} alt="logo" width="150px"/>
                </a>
            </div>
            <input 
                type="checkbox" 
                className={style.toggle_menu_check} 
                id='toggle_menu_check'
                checked={menuActive}
            />
             <ul id='main-menu' className={`${style.main_menu} ${menuActive ? style.menu_active : ''}`}>

                <li className={style.main_menu_item_one}>
                    <a href="/home" className={style.main_menu_link}> Inicio </a>
                </li>
                <li className={style.main_menu_item}>
                    <a href="/" className={style.main_menu_link}> Calculadora </a>
                </li>
                <li className={style.main_menu_item}>
                    <a href="https://wa.link/zay1yv" 
                        target="_blank" rel="noopener noreferrer"
                        className={style.main_menu_link_wsp}> 
                        WhatsApp 
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
