import {  NavBar } from "../Components";
import Head from "next/head";

const userFeed = () =>{
    return(
        <div>

        <Head>
            <title>Property Finder</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
            <p>This is user feed</p>
        </div>
    )
}

export default userFeed;