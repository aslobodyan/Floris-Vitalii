import React, { useState } from 'react';
import css from './Price.module.css';
import ContentEditable from 'react-contenteditable'

const Price = () => {
    const [price, setPrice] = useState('$128.99');
    const contentEditable = React.createRef();

    const handleChange = (e) => {
        if (!e || !e.target) {
            return null;
        }

        setPrice(e.target.value);
    };

    return (
        <div className={css.container}>
            <ContentEditable
                innerRef={contentEditable}
                html={price}                // innerHTML of the editable div
                disabled={false}            // use true to disable editing
                onChange={handleChange}     // handle innerHTML change
                tagName='div'               // Use a custom HTML tag (uses a div by default)
            />
        </div>
    );
};

export default Price;
