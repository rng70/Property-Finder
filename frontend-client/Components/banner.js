import styles from '../styles/Banner.module.css';

const Banner = ({ bannerData }) => {
    const { title, button, imgUrl } = bannerData;
    console.log(imgUrl);

    return (
        <div className={styles.container}  style={{ backgroundImage: `url(${imgUrl})` }}>
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