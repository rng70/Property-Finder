import Head from "next/head";
import { getAllProperties } from "../data/dummy-data";
import { getAllBannerData } from "../data/banner-data";
import { PropertyList, NavBar, Banner, Card } from "../Components";
import CardHome from './cardHome';
import footerStyle from "../styles/Footer.module.css";

import styles from '../styles/Home.module.css'

export async function getStaticProps(context) {
  const propertiesData = getAllProperties();
  const bannerData = getAllBannerData();
  return {
    props: {
      properties: propertiesData,
      bannerData,
    }
  }
}

const Home = (props) => {

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Property Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Banner bannerData={props.bannerData} />
      <PropertyList properties={props.properties} />
      <CardHome />
      <footer className={footerStyle.footer}>
        <p>Author : CSE,BUET</p>
        <p><a href="www.cse.buet.ac.bd">www.cse.buet.ac.bd</a></p>
      </footer>

    </div>
  )
}

export default Home;