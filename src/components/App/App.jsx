import React from 'react';
import css from './App.module.css';
import Button from "../Button/Button";
import Product from "../Product/Product";
import InfoBlock from "../InfoBlock/InfoBlock";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faSearch, faHeart);

const App = () => {
    return (
        <div className={css.container}>
            <Button />
            <Product />
            <InfoBlock />
        </div>
    );
}

export default App;
