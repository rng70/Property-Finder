import Head from "next/head";
import { getAllProperties } from "../dummy-data";
import { PropertyList, NavBar } from "../Components";

export async function getStaticProps(context) {
  const propertiesData = getAllProperties(); 
  return {
    props: {
      properties: propertiesData,
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

      <NavBar/>
      <PropertyList properties={props.properties} />
 
    </div>
  )
}

export default Home;