import React from 'react';
import css from './Offerer.module.css';
import ExternalImage from 'react-external-image';
import * as PropTypes from 'prop-types';

const Offerer = props => {
    const { logo, name, brokenLogoImage } = props;

    if (!logo) {
        return null;
    }

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

Offerer.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    brokenLogoImage: PropTypes.string,
};

export default Offerer;
