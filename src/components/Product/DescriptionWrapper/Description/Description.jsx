import React from 'react';
import css from './Description.module.css';
import ReactHtmlParser from 'react-html-parser';

const Description = props => {
    const { text } = props;

    return (
        <div className={css.container}>
            { ReactHtmlParser(text) }
        </div>
    );
};

export default Description;
