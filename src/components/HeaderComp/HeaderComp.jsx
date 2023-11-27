import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./headerComp.module.scss";
import { allLogos } from "../../content/logos/allLogos";

export const HeaderComp = () => {
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
        </div>
    );
};
