import React, { useEffect } from "react";
import styles from "./locationPage.module.scss";
import { allImages } from "../../content/images/allImages";

export const LocationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dataLocation = [
        {
            id: 1,
            locationName: "Canada",
            contacts: {
                location: {
                    title: "Designo Central Office",
                    text: "3886 Wellington Street Toronto, Ontario M9C 3J5",
                },
                phone: {
                    title: "Contact Us (Central Office)",
                    text: [
                        {
                            id: "phone-1",
                            title: "P:",
                            link: "+1 253-863-8967",
                            href: "tel:+12538638967",
                        },
                        {
                            id: "mail-2",
                            title: "M:",
                            link: "contact@designo.com",
                            href: "mailto:contact@designo.com",
                        },
                    ],
                },
            },
            image: allImages.locationImages.loc_img1,
            reverse: false,
        },
        {
            id: 2,
            locationName: "Australia",
            contacts: {
                location: {
                    title: "Designo AU Office",
                    text: "19 Balonne Street New South Wales 2443",
                },
                phone: {
                    title: "Contact Us",
                    text: [
                        {
                            id: "phone-1",
                            title: "P:",
                            link: "(02) 6720 9092",
                            href: "tel:0267209092",
                        },
                        {
                            id: "mail-2",
                            title: "M:",
                            link: "contact@designo.au",
                            href: "mailto:contact@designo.au",
                        },
                    ],
                },
            },
            image: allImages.locationImages.loc_img2,
            reverse: true,
        },
        {
            id: 3,
            locationName: "United Kingdom",
            contacts: {
                location: {
                    title: "Designo UK Office",
                    text: "13  Colorado Way Rhyd-y-fro SA8 9GA",
                },
                phone: {
                    title: "Contact Us",
                    text: [
                        {
                            id: "phone-1",
                            title: "P:",
                            link: "078 3115 1400",
                            href: "tel:07831151400",
                        },
                        {
                            id: "mail-2",
                            title: "M:",
                            link: "contact@designo.uk",
                            href: "mailto:contact@designo.uk",
                        },
                    ],
                },
            },
            image: allImages.locationImages.loc_img1,
            reverse: false,
        },
    ];

    return (
        <div className={styles.locationPage}>
            {dataLocation.map((location) => (
                <div
                    className={`${styles.itemLocation} ${
                        location.reverse ? styles.reverse : ""
                    }`}
                    key={location.id}
                >
                    <div className={styles.textSection}>
                        <h2 className={styles.title2}>
                            {location.locationName}
                        </h2>
                        <div className={styles.linksLocation}>
                            <div className={styles.item1Location}>
                                <h3 className={styles.title3}>
                                    {location.contacts.location.title}
                                </h3>
                                <p className={styles.mainText}>
                                    {location.contacts.location.text}
                                </p>
                            </div>
                            <div className={styles.item2Phone}>
                                <h3 className={styles.title3} id={location.id}>
                                    {location.contacts.phone.title}
                                </h3>
                                <div className={styles.textPhone}>
                                    {location.contacts.phone.text.map(
                                        (item) => (
                                            <div className={styles.linkText}>
                                                <p>{item.title}</p>
                                                <a
                                                    href={item.href}
                                                    key={item.id}
                                                >
                                                    {item.link}
                                                </a>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageSection}>
                        <img src={location.image} alt={location.locationName} />
                    </div>
                </div>
            ))}
        </div>
    );
};
