import styles from '../styles/Banner.module.css';

// const Banner = ({ bannerData }) => {
const Banner = (props)=>{
    // const { title, button } = bannerData;
    const title  = props.title;

    return (
        <div className={styles.container}>
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