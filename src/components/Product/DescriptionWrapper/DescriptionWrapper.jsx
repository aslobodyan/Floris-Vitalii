import React from 'react';
import css from './DescriptionWrapper.module.css';
import TopSection from "./TopSection/TopSection";
import TitleContainer from "./Title/TitleContainer";
import Tags from "./Tags/Tags";
import Description from "./Description/Description";
import BottomSection from "./BottomSection/BottomSection";

const DescriptionWrapper = () => {
    return (
        <div className={css.container}>
            <div className={css.topSection}>
                <TopSection />
            </div>
            <div className={css.content}>
                <TitleContainer />
                <Tags />
                <Description />
            </div>
            <div className={css.bottomSection}>
                <BottomSection />
            </div>
        </div>
    );
};

export default DescriptionWrapper;
