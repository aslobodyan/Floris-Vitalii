import React from 'react';
import css from './Offerer.module.css';
import ExternalImage from 'react-external-image';

const Offerer = props => {
    const { logo, name, brokenLogoImage } = props;

    return (
        <div className={css.container}>
            <ExternalImage
                src={brokenLogoImage}
                fallbackImages={[
                    logo
                ]}
                className={css.image}
            />
            <span className={css.name}>{name}</span>
        </div>
    );
};

export default Offerer;
