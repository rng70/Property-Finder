import Head from 'next/head'
import {useRouter} from "next/router"
import Link from "next/link"
import {getAllProperties} from '../dummy-data'
import PropertyList from '../Components/Properties/PropertyList';
import Image from 'next/image'

const Home = () => {
  const properties = getAllProperties();
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      
      <Head>
        <title>Property Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <PropertyList properties={properties}/>
 
    </div>
  )
}

export default Home
