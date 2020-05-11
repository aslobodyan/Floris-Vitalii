import React from "react";
import css from './Button.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = () => {
    return (
        <div className={css.container}>
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            <span>{'Button translation key'}</span>
        </div>
    );
};

export default Button;
