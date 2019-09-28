import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import svgLogo from '../assets/img/logo-secondary.png';

const navigation = props => {
  return (
    <header className="header">
        <div className="header__logo">
            <Link to="/">
                <img src={svgLogo} alt="Logo" className="logo" />
            </Link>
        </div>
        <div className="header__navigation">
            <ul className="header__list">
            <li className="header__item"><NavLink to="/about" className="header__link">About</NavLink></li>
            <li className="header__item"><NavLink to="/register" className="header__link">Register</NavLink></li>
            <li className="header__item"><NavLink to="/conferences" exact className="header__link">Conferences</NavLink></li>
            <li className="header__item"><NavLink to="/contact" className="header__link">Contact</NavLink></li>
            </ul>
        </div>
    </header>
  );
}

export default navigation;