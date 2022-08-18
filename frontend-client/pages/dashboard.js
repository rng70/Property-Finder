import { NavBar } from "../Components";
import Head from 'next/head';

import styles from '../styles/Dashboard.module.css'

const DashBoard = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Property Finder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            
            <div className={styles.container2}>
                <p>This is dashborad</p>
            </div>
        </div>
    )
}

export default DashBoard;