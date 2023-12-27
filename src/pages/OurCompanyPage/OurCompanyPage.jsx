import React, { useEffect } from "react";
import styles from "./ourCompany.module.scss";
import { allImages } from "../../content/images/allImages";
import { LocationComp } from "../../components/LocationComp/LocationComp";

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
            <LocationComp/>
            <div className={styles.realdealSection}>
                <div className={styles.textSection}>
                    <h2 className={styles.title2}>The real deal</h2>
                    <p className={styles.mainText}>
                        As strategic partners in our clients’ businesses, we are
                        ready to take on any challenge as our own. Solving real
                        problems require empathy and collaboration, and we
                        strive to bring a fresh perspective to every
                        opportunity. We make design and technology more
                        accessible and give you tools to measure success.
                    </p>
                    <p className={styles.mainText}>
                        We are visual storytellers in appealing and captivating
                        ways. By combining business and marketing strategies, we
                        inspire audiences to take action and drive real results.
                    </p>
                </div>
                <div className={styles.imageSection}>
                    <img src={allImages.ourCompanyImages.bg_Img3} alt="" />
                </div>
            </div>
        </div>
    );
};
