import React from 'react';
import css from './DescriptionWrapper.module.css';
import TopSection from "./TopSection/TopSection";
import TitleContainer from "./Title/TitleContainer";
import OffererContainer from "./Offerer/OffererContainer";
import DescriptionContainer from "./Description/DescriptionContainer";
import BottomSectionContainer from "./BottomSection/BottomSectionContainer";

const DescriptionWrapper = () => {
    return (
        <div className={css.container}>
            <div className={css.topSection}>
                <TopSection />
            </div>
            <div className={css.content}>
                <TitleContainer />
                <OffererContainer />
                <DescriptionContainer />
            </div>
            <div className={css.bottomSection}>
                <BottomSectionContainer />
            </div>
        </div>
    );
};

export default DescriptionWrapper;
