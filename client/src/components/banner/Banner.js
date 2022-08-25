import styles from './Banner.module.css';


const Banner = ({ bannerData }) => {
    const { title, button, imgUrl } = bannerData;

    return (
        <div className={styles.container}  style={{ backgroundImage: `url(${imgUrl})` }}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.buttonWrapper}>
                <button className={styles.button}>
                    {/* {button.sale.title} */}
                    Sign in
                </button>
            </div>
            {/* <button className={styles.searchButton}>Search</button> */}
        </div>
    )
}

export default Banner;