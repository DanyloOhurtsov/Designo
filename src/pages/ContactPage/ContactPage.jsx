import React, { useEffect } from "react";
import styles from "./contactPage.module.scss";

import { LocationComp } from "../../components/LocationComp/LocationComp";

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.contactPage}>
            <div className={styles.contactForm}>
                <div className={styles.textSection}>
                    <h2 className={styles.title2}>Contact Us</h2>
                    <p className={styles.mainText}>
                        Ready to take it to the next level? Let’s talk about
                        your project or idea and find out how we can help your
                        business grow. If you are looking for unique digital
                        experiences that’s relatable to your users, drop us a
                        line.
                    </p>
                </div>
                <form action="submit">
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.inputForm}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.inputForm}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className={styles.inputForm}
                    />
                    <textarea
                        placeholder="Your Message"
                        className={styles.textArea}
                    ></textarea>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
            <LocationComp/>
        </div>
    );
};
