import React from 'react';
import css from './UserIcon.module.css';
import {NavLink} from 'react-router-dom';
import imgSource from './../../../../../assets/images/floris-icon.png';

const UserIcon = () => {
    return(
        <NavLink to={'/some-path'}>
            <img src={imgSource} className={css.imgSize} alt={''} title={''} />
        </NavLink>
    );
};

export default UserIcon;
