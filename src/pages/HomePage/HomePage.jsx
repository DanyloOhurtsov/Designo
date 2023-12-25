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
                    <img src={allImages.homeImages.heroImage} alt="" />
                </div>
            </div>
            <div className={styles.linksSectionHome}>
                <NavLink to={"/catalog/webDesign"} className={styles.webDesign}>
                    <h2 className={styles.title2}>Web design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
                <NavLink to={"/catalog/appDesign"} className={styles.appDesign}>
                    <h2 className={styles.title2}>App design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
                <NavLink
                    to={"/catalog/graphicDesign"}
                    className={styles.graphicDesign}
                >
                    <h2 className={styles.title2}>Graphic design</h2>
                    <p className={styles.textLink}>
                        VIEW PROJECTS
                        <span>
                            <AiOutlineRight />
                        </span>
                    </p>
                </NavLink>
            </div>
            <div className={styles.iconsSectionsHome}>
                <div className={styles.itemIcons}>
                    <div className={styles.imageSection}>
                        <img src={allImages.homeImages.home_Img1} alt="" />
                    </div>
                    <div className={styles.textSection}>
                        <h4 className={styles.title4}>PASSIONATE</h4>
                        <p className={styles.mainText}>
                            Each project starts with an in-depth brand research
                            to ensure we only create products that serve a
                            purpose. We merge art, design, and technology into
                            exciting new solutions.
                        </p>
                    </div>
                </div>
                <div className={styles.itemIcons}>
                    <div className={styles.imageSection}>
                        <img src={allImages.homeImages.home_Img2} alt="" />
                    </div>
                    <div className={styles.textSection}>
                        <h4 className={styles.title4}>RESOURCEFUL</h4>
                        <p className={styles.mainText}>
                            Everything that we do has a strategic purpose. We
                            use an agile approach in all of our projects and
                            value customer collaboration. It guarantees superior
                            results that fulfill our clients’ needs.
                        </p>
                    </div>
                </div>
                <div className={styles.itemIcons}>
                    <div className={styles.imageSection}>
                        <img src={allImages.homeImages.home_Img3} alt="" />
                    </div>
                    <div className={styles.textSection}>
                        <h4 className={styles.title4}>FRIENDLY</h4>
                        <p className={styles.mainText}>
                            We are a group of enthusiastic folks who know how to
                            put people first. Our success depends on our
                            customers, and we strive to give them the best
                            experience a company can provide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
