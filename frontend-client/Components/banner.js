import styles from '../styles/Banner.module.css';

const Banner = ({ bannerData }) => {
    const { title, button } = bannerData;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.buttonWrapper}>
                <button className={styles.button}>
                    {button.sale.title}
                </button>
                 
                <button className={styles.button}>
                    {button.rent.title}
                </button>
            </div>

            <button className={styles.searchButton}>Search</button>
        </div>
    )
}

export default Banner;