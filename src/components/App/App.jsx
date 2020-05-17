import React, {useEffect} from 'react';
import css from './App.module.css';
import Button from '../_COMMON/Button/Button';
import InfoBlock from '../InfoBlock/InfoBlock';
import ProductContainer from '../Product/ProductContainer';
import {initializeApp} from '../../redux/reducers/mainReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronLeft, faSearch, faHeart, faProjectDiagram, faPlus,
    faInfoCircle, faComment, faShoppingBag, faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from 'prop-types';

library.add(
    faChevronLeft, faSearch, faHeart,
    faProjectDiagram, faPlus, faInfoCircle,
    faComment, faShoppingBag, faEllipsisV
);

const App = props => {
    const { isInitialized, initializeApp } = props;

    useEffect(() => {
        if (!isInitialized) {
            initializeApp();
        }
    });

    return (
        <div className={css.container}>
            <h2 className={css.header + ' ' + css.green}>Finished, can be reviewed.</h2>
            <Button text={'Button translation key'} icon={'chevron-left'} />
            {isInitialized && <ProductContainer />}
            <InfoBlock />
        </div>
    );
}

App.propTypes = {
    isInitialized: PropTypes.bool,
    initializeApp: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.mainReducer.isInitialized
    }
};

export default withRouter(connect(mapStateToProps, { initializeApp })(App));
