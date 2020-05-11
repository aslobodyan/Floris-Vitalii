import React from 'react';
import css from './ImageWrapper.module.css';
import imgSource from './../../../assets/images/mouse.png';
import SearchIcon from "./SearchIcon/SearchIcon";
import LikeIcon from "./LikeIcon/LikeIcon";
import Price from "./Price/Price";

const ImageWrapper = () => {
    return (
        <div className={css.container}>
            <img src={imgSource} alt={'Some text'} />
            <SearchIcon />
            <LikeIcon />
            <Price />
        </div>
    );
};

export default ImageWrapper;
