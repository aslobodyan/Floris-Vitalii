import React, { useRef } from 'react';
import css from './Title.module.css';
import ContentEditable from 'react-contenteditable';
import * as PropTypes from 'prop-types';

const Title = props => {
    const { title, setTitle } = props;
    const editableTitle = useRef('');

    if (!title) {
        return null;
    }

    editableTitle.current = title;

    const handleChange = (e) => {
        if (!e || !e.target) {
            return null;
        }

        setTitle(e.target.value);
    };

    return (
        <div className={css.container}>
            <h2>
                <ContentEditable
                    html={editableTitle.current}
                    onChange={handleChange}
                />
            </h2>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    setTitle: PropTypes.func,
}

export default Title;
