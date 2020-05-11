import React from 'react';
import css from './SearchIcon.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchIcon = () => {
    return (
        <div className={css.container}>
            <FontAwesomeIcon icon={['fas', 'heart']} />
        </div>
    );
};

export default SearchIcon;
