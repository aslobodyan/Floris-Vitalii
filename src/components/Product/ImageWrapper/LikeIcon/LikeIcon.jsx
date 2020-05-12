import React from 'react';
import css from './LikeIcon.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeIcon = () => {
    return (
        <div className={css.container}>
            <FontAwesomeIcon icon={['fas', 'heart']} />
        </div>
    );
};

export default LikeIcon;
