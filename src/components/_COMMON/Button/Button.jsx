import React from "react";
import css from './Button.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as PropTypes from "prop-types";

const Button = (props) => {
    const { text, icon, color } = props;

    return (
        <div className={css.container + (color ? ' ' + css.red : '')}>
            <FontAwesomeIcon icon={['fas', icon]} />
            <span>{text}</span>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Button;
