import React, { useRef } from 'react';
import css from './Price.module.css';
import ContentEditable from 'react-contenteditable';
import * as PropTypes from 'prop-types';

const Price = props => {
    const editablePrice = useRef('');
    const { price, setPrice } = props;

    if (!price) {
        return null;
    }


    editablePrice.current = String(price);

    const handleChange = (e) => {
        if (!e || !e.target) {
            return null;
        }

        setPrice(e.target.value);
    };

    return (
        <div className={css.container}>
            <span>&euro;</span>
            <ContentEditable
                className={css.editableDiv}
                html={editablePrice.current}
                onChange={handleChange}
            />
        </div>
    );
};

Price.propTypes = {
    price: PropTypes.string,
    setPrice: PropTypes.func,
};

export default Price;
