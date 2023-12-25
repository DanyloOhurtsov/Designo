import React from "react";
import { useParams } from "react-router-dom";
import { contentTextLinks } from "../../content/text/contentText";
import styles from "./catalogPage.module.scss";

const CatalogPage = () => {
    const { catalogname } = useParams();
    const data = contentTextLinks[catalogname];

    return (
        <div className={styles.catalogPage}>
            <div className={styles.titleSection}>
                <h1 className={styles.title1Catalog}>{data.title}</h1>
                <p className={styles.subtitleCatalog}>{data.subTitle}</p>
            </div>
            <div className={styles.cardsSections}>
                {data.cards.map((item) => (
                    <div className={styles.cardCatalog} key={item.id}>
                        <div className={styles.imageCard}>
                            <img src={item.image} alt="" />
                        </div>
                        <div className={styles.textCard}>
                            <h2 className={styles.title2Card}>{item.title}</h2>
                            <p className={styles.subtitleCard}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
