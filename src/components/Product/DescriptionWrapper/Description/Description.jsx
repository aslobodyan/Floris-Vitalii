import React from 'react';
import css from './Description.module.css';

const Description = () => {
    return (
        <div className={css.container}>
            {'Some test text is hardcoded for now. Later it will come from API.'}
        </div>
    );
};

export default Description;
