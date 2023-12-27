import React from "react";
import styles from "./locationComp.module.scss";
import { NavLink } from "react-router-dom";
import { allImages } from "../../content/images/allImages";

export const LocationComp = () => {
    return (
        <div className={styles.iconsSection}>
            <div className={styles.iconItem}>
                <img src={allImages.ourCompanyImages.our_img1} alt="" />
                <p className={styles.titleIcon}>Canada</p>
                <NavLink className={styles.linkToLocation} to={"/locations"}>
                    See location
                </NavLink>
            </div>
            <div className={styles.iconItem}>
                <img src={allImages.ourCompanyImages.our_img2} alt="" />
                <p className={styles.titleIcon}>AUSTRALIA</p>
                <NavLink className={styles.linkToLocation} to={"/locations"}>
                    See location
                </NavLink>
            </div>
            <div className={styles.iconItem}>
                <img src={allImages.ourCompanyImages.our_img3} alt="" />
                <p className={styles.titleIcon}>UNITED KINGDOM</p>
                <NavLink className={styles.linkToLocation} to={"/locations"}>
                    See location
                </NavLink>
            </div>
        </div>
    );
};
