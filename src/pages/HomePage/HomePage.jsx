import React from "react";
import styles from "./homePage.module.scss";
import { NavLink } from "react-router-dom";
import { allImages } from "../../content/images/allImages";
import { AiOutlineRight } from "react-icons/ai";

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
                <div className={styles.imageContentHero}>
                    <img src={allImages.heroImage} alt="" />
                </div>
            </div>
            <div className={styles.linksSectionHome}>
                <NavLink
                    to={"/catalog/web-design"}
                    className={styles.webDesign}
                >
                    <h2 className={styles.title2}>Web design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS{" "}
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
                <NavLink
                    to={"/catalog/app-design"}
                    className={styles.appDesign}
                >
                    <h2 className={styles.title2}>App design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS{" "}
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
                <NavLink
                    to={"/catalog/graphic-design"}
                    className={styles.graphicDesign}
                >
                    <h2 className={styles.title2}>Graphic design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS{" "}
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
            </div>
            <div className={styles.iconsSectionsHome}></div>
        </div>
    );
};
