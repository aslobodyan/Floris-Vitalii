import React from 'react';
import css from './App.module.css';
import Button from '../Button/Button';
import InfoBlock from '../InfoBlock/InfoBlock';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import ProductContainer from '../Product/ProductContainer';
import {initializeApp} from '../../redux/reducers/mainReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

library.add(faChevronLeft, faSearch, faHeart);

const App = props => {
    const { isInitialized, initializeApp } = props;

    initializeApp();

    return (
        <div className={css.container}>
            <h2 className={css.header}>Not ready yet, but is ok to track the Progress.</h2>
            <Button />
            {isInitialized && <ProductContainer />}
            <InfoBlock />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.mainReducer.isInitialized
    }
};

export default withRouter(connect(mapStateToProps, { initializeApp })(App));
