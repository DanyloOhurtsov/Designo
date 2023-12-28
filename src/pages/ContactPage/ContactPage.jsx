import React, { useEffect, useState } from "react";
import styles from "./contactPage.module.scss";

import { LocationComp } from "../../components/LocationComp/LocationComp";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {
            setErrorMessage("");
        } else {
            setErrorMessage("");
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім'я"
                        className={`${
                            formData.name ? styles.inputFormFilled : ""
                        } ${styles.inputForm}`}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Електронна пошта"
                        className={`${
                            formData.name ? styles.inputFormFilled : ""
                        } ${styles.inputForm}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        className={`${
                            formData.name ? styles.inputFormFilled : ""
                        } ${styles.inputForm}`}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше повідомлення"
                        className={`${
                            formData.name ? styles.inputFormFilled : ""
                        } ${styles.textArea}`}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className={styles.submitButton}>
                        Відправити
                    </button>
                </form>
            </div>
            <LocationComp />
        </div>
    );
};
