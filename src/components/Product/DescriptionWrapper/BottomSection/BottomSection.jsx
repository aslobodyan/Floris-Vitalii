import React, { useEffect } from 'react';
import css from './BottomSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const BottomSection = props => {
    const { mockedData, getTemplateData } = props;

    useEffect(() => {
        if (!mockedData || !mockedData.length) {
            getTemplateData();
        }
    });

    if (!mockedData || !mockedData.length) {
        return null;
    }

    return (
        <div className={css.container}>
            <ul>
                {mockedData &&
                    mockedData.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.path} activeClassName={css.active}>
                                    <FontAwesomeIcon icon={['fas', item.icon]} />
                                    {item.text && <span className={css.info}>{item.text}</span>}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default BottomSection;
