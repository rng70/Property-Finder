import Head from "next/head";
import { getAllProperties } from "../data/dummy-data";
import { getAllBannerData } from "../data/banner-data";
import { PropertyList, NavBar, Banner } from "../Components";

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
 
    </div>
  )
}

export default Home;