import React from 'react';
import css from './Description.module.css';
import ReactHtmlParser from 'react-html-parser';
import * as PropTypes from 'prop-types';

const Description = props => {
    const { text } = props;

    if (!text || !text.length) {
        return null;
    }

    return (
        <div className={css.container}>
            {
                /*
                Usually I do all the data convertation somewhere between DAL and BLL ...
                .... for example in some DVL (Data Validation Layer)
                But it have no sense to do it for the only convertation in our small App
                */
                ReactHtmlParser(text) }
        </div>
    );
};

Description.propTypes = {
    text: PropTypes.string
};

export default Description;
