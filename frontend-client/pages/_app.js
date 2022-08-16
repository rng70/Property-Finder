import '../styles/globals.css'
import Layout from '../Components/layout/layout'
// import { NavBar  } from '../Components' 

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <NavBar/> */}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
