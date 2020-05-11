import React from 'react';
import css from './Product.module.css';
import ImageWrapper from "./ImageWrapper/ImageWrapper";
import DescriptionWrapper from "./DescriptionWrapper/DescriptionWrapper";

const Product = props => {
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

export default Product;
