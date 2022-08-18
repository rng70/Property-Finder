import Head from "next/head";
import { getAllProperties } from "../data/dummy-data";
import { getAllBannerData } from "../data/banner-data";
import { PropertyList, NavBar, Banner, Card } from "../Components";
import CardHome from './cardHome';
import footerStyle from "../styles/Footer.module.css";

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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      
      <Head>
        <title>Property Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title="Property FinderBD" />
      {/* <NavBar /> */}
      {/* { <Banner bannerData={props.bannerData} /> } */}
      <CardHome />
      <footer className={footerStyle.footer}>
        <p>Author : CSE,BUET</p>
        <p><a href="www.cse.buet.ac.bd">www.cse.buet.ac.bd</a></p>
      </footer>
    </div>
  )
}

export default Home;