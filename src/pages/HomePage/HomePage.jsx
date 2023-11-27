import React from "react";
import styles from "./homePage.module.scss";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.heroSectionHome}>
                <div className={styles.textContentHero}>
                    <h1 className={styles.title1}>
                        Award-winning custom designs and digital branding
                        solutions
                    </h1>
                    <p className={styles.subtitle}>
                        With over 10 years in the industry, we are experienced
                        in creating fully responsive websites, app design, and
                        engaging brand experiences. Find out more about our
                        services.
                    </p>
                    <NavLink className={styles.learnmoreBtn} to={"/contact"}>
                        Learn more
                    </NavLink>
                </div>
            </div>
            <div className={styles.linksSectionHome}></div>
            <div className={styles.iconsSectionsHome}></div>
        </div>
    );
};
