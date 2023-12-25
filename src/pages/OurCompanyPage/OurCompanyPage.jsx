import React, { useEffect } from "react";
import styles from "./ourCompany.module.scss";
import { allImages } from "../../content/images/allImages";
import { NavLink } from "react-router-dom";

export const OurCompanyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.ourCompanyPage}>
            <div className={styles.heroSection}>
                <div className={styles.textContentHero}>
                    <h2 className={styles.title2}>About Us</h2>
                    <p className={styles.subtitle}>
                        Founded in 2010, we are a creative agency that produces
                        lasting results for our clients. We’ve partnered with
                        many startups, corporations, and nonprofits alike to
                        craft designs that make real impact. We’re always
                        looking forward to creating brands, products, and
                        digital experiences that connect with our clients’
                        audiences.
                    </p>
                </div>
                <div className={styles.photoContentHero}>
                    <img src={allImages.ourCompanyImages.bg_Img1} alt="" />
                </div>
            </div>
            <div className={styles.talentSection}>
                <div className={styles.imageSection}>
                    <img src={allImages.ourCompanyImages.bg_Img2} alt="" />
                </div>
                <div className={styles.textSection}>
                    <h4 className={styles.title4}>World-class talent</h4>
                    <p className={styles.mainText}>
                        We are a crew of strategists, problem-solvers, and
                        technologists. Every design is thoughtfully crafted from
                        concept to launch, ensuring success in its given market.
                        We are constantly updating our skills in a myriad of
                        platforms.
                    </p>
                    <p className={styles.mainText}>
                        Our team is multi-disciplinary and we are not merely
                        interested in form — content and meaning are just as
                        important. We give great importance to craftsmanship,
                        service, and prompt delivery. Clients have always been
                        impressed with our high-quality outcomes that
                        encapsulates their brand’s story and mission.
                    </p>
                </div>
            </div>
            <div className={styles.iconsSection}>
                <div className={styles.iconItem}>
                    <img src={allImages.ourCompanyImages.our_img1} alt="" />
                    <p className={styles.titleIcon}>Canada</p>
                    <NavLink
                        className={styles.linkToLocation}
                        to={"/locations"}
                    >
                        See location
                    </NavLink>
                </div>
                <div className={styles.iconItem}>
                    <img src={allImages.ourCompanyImages.our_img2} alt="" />
                    <p className={styles.titleIcon}>AUSTRALIA</p>
                    <NavLink
                        className={styles.linkToLocation}
                        to={"/locations"}
                    >
                        See location
                    </NavLink>
                </div>
                <div className={styles.iconItem}>
                    <img src={allImages.ourCompanyImages.our_img3} alt="" />
                    <p className={styles.titleIcon}>UNITED KINGDOM</p>
                    <NavLink
                        className={styles.linkToLocation}
                        to={"/locations"}
                    >
                        See location
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
