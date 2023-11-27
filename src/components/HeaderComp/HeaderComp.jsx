import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./headerComp.module.scss";
import { allLogos } from "../../content/logos/allLogos";
import { AiOutlineMenu } from "react-icons/ai";

export const HeaderComp = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const bodyElement = document.querySelector("body");
    const toggleMobileMenu = () => {
        bodyElement.classList.toggle("overflowSmall");
        setIsMobileOpen(!isMobileOpen);
    };
    const closeMenu = () => {
        setIsMobileOpen(false);
        bodyElement.classList.remove("overflowSmall");
    };

    return (
        <div className={styles.headerComp}>
            <div className={styles.desktopHeaderContent}>
                <NavLink to={"/"}>
                    <img src={allLogos.darkLogo} alt="" />
                </NavLink>
                <nav className={styles.navigationLinks}>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.linkToPage} ${
                                isActive ? styles.active : ""
                            }`
                        }
                        to={"/our-company"}
                    >
                        Our Company
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.linkToPage} ${
                                isActive ? styles.active : ""
                            }`
                        }
                        to={"/locations"}
                    >
                        Locations
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.linkToPage} ${
                                isActive ? styles.active : ""
                            }`
                        }
                        to={"/contact"}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
            <div className={styles.mobileHeaderContent}>
                <NavLink to={"/"} onClick={closeMenu}>
                    <img src={allLogos.darkLogo} alt="" />
                </NavLink>
                <button
                    className={styles.openNavigation}
                    onClick={toggleMobileMenu}
                >
                    <AiOutlineMenu />
                </button>
                <div
                    className={`${styles.mobileNavigation} ${
                        isMobileOpen ? styles.active : ""
                    }`}
                >
                    <nav>
                        <NavLink
                            to={"/our-company"}
                            className={styles.linkToPageMobile}
                            onClick={toggleMobileMenu}
                        >
                            Our Company
                        </NavLink>
                        <NavLink
                            to={"/locations"}
                            className={styles.linkToPageMobile}
                            onClick={toggleMobileMenu}
                        >
                            Locations
                        </NavLink>
                        <NavLink
                            to={"/contact"}
                            className={styles.linkToPageMobile}
                            onClick={toggleMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};
