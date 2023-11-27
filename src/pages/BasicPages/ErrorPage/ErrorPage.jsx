import React from "react";
import styles from "./errorPage.module.scss";
import { NavLink } from "react-router-dom";
import { allLogos } from "../../../content/logos/allLogos";

export const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorPageContent}>
                <NavLink to={"/"}>
                    <img src={allLogos.darkLogo} alt="" />
                </NavLink>
                <div className={styles.textErrorPage}>
                    <h2 className={styles.title2}>Oops!</h2>
                    <h4 className={styles.title4}>404 - Page not found</h4>
                    <p className={styles.description}>
                        It looks like we can't find that page.
                        <br />
                        Maybe it got lost somewhere or turned invisible.
                        <br />
                        Please double-check your URL or navigate to another part
                        of the website.
                    </p>
                    <NavLink className={styles.buttonHomePage}>
                        Go to home page
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
