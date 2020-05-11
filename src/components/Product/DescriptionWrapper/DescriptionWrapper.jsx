import React from 'react';
import css from './DescriptionWrapper.module.css';
import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";

const DescriptionWrapper = () => {
    return (
        <div className={css.container}>
            <div className={css.topSection}>
                <TopSection />
            </div>
            <div className={css.content}>
                {/*<Title />
                <Description />*/}
            </div>
            <div className={css.bottomSection}>
                <BottomSection />
            </div>
        </div>
    );
};

export default DescriptionWrapper;
