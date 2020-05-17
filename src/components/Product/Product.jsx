import React from 'react';
import css from './Product.module.css';
import ImageWrapper from './ImageWrapper/ImageWrapper';
import DescriptionWrapper from './DescriptionWrapper/DescriptionWrapper';
import * as PropTypes from 'prop-types';

const Product = props => {
    const { isInitialized } = props;

    if (!isInitialized) {
        return null;
    }

    return (
        <div className={css.productSection}>
            <div className={css.productImageWrapper}>
                <ImageWrapper />
            </div>
            <div className={css.productDescriptionWrapper}>
                <DescriptionWrapper />
            </div>
        </div>
    );
};

Product.propTypes = {
    isInitialized: PropTypes.bool,
};

export default Product;
