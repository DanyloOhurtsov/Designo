import React, { useEffect } from "react";
import styles from "./ourCompany.module.scss";

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
                    
                </div>
            </div>
        </div>
    );
};
