import { NavLink } from "react-router-dom";
import styles from "./footerComp.module.scss";
import { allLogos } from "../../content/logos/allLogos";
// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export const FooterComp = () => {
    return (
        <div className={styles.footerComp}>
            <div className={styles.topContentFooter}>
                <div className={styles.textContent}>
                    <h2 className={styles.title2}>
                        Let’s talk about
                        <br />
                        your project
                    </h2>
                    <p className={styles.subtitle}>
                        Ready to take it to the next level? Contact us today and
                        find out how our expertise can help your business grow.
                    </p>
                </div>
                <NavLink
                    to={"contact"}
                    className={styles.buttonLearnmoreFooter}
                >
                    Learn More
                </NavLink>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.bottomContentFooter}>
                    <div className={styles.linksRow}>
                        <NavLink to={"/"}>
                            <img src={allLogos.lightLogo} alt="LightLogo" />
                        </NavLink>
                        <nav className={styles.linksNavigation}>
                            <NavLink
                                to={"/our-company"}
                                className={({ isActive }) =>
                                    `${styles.linkToPage} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Our company
                            </NavLink>
                            <NavLink
                                to={"/locations"}
                                className={({ isActive }) =>
                                    `${styles.linkToPage} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Locations
                            </NavLink>
                            <NavLink
                                to={"/contact"}
                                className={({ isActive }) =>
                                    `${styles.linkToPage} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </nav>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.contactRow}>
                        <div className={styles.locationContent}>
                            <div className={styles.itemLocation}>
                                <p className={styles.titleLocation}>
                                    Designo Central Office
                                </p>
                                <p className={styles.textLocation}>
                                    3886 Wellington Street
                                    <br />
                                    Toronto, Ontario M9C 3J5
                                </p>
                            </div>
                            <div className={styles.itemLocation}>
                                <p className={styles.titleLocation}>
                                    Contact Us (Central Office){" "}
                                </p>
                                <p className={styles.textLocation}>
                                    P: +1 253-863-8967
                                </p>
                                <p className={styles.textLocation}>
                                    M: contact@designo.com
                                </p>
                            </div>
                        </div>
                        <div className={styles.sociaContent}>
                            <a href="https://www.facebook.com/">
                                <FaFacebookSquare />
                            </a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube />
                            </a>
                            <a href="https://twitter.com/">
                                <FaSquareXTwitter />
                            </a>
                            <a href="https://www.pinterest.com/">
                                <FaSquarePinterest />
                            </a>
                            <a href="https://www.instagram.com/">
                                <FaSquareInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
