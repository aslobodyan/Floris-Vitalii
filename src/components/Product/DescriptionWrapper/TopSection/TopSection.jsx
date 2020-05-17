import React from 'react';
import css from './TopSection.module.css';
import UserIcon from "./UserIcon/UserIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../../../_COMMON/Button/Button";

const TopSection = () => {
    return (
        <div className={css.container}>
            <div className={css.col_98}>
                <UserIcon />
            </div>
            <div className={css.col_1 + ' ' + css.iconAlignment}>
                <FontAwesomeIcon icon={['fas', 'project-diagram']} />
            </div>
            <div className={css.col_1}>
                <Button text={'Bekijken'} icon={'plus'} color={'red'} />
            </div>
        </div>
    );
}

export default TopSection;
