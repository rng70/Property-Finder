import Head from "next/head";
import Image from 'next/image'
import styles from "../styles/UserSignIn.module.css";
import {useState } from 'react';
import {useRouter} from 'next/router';

const SellForm = (props) => {

    //for dispalying user message about valid email input
    // keeping state using react hooks

    const router = useRouter();
    const [userMsg,setUserMsg] = useState("");

    return( 
    <div className={styles.container}>
        <Head>
            <title>
                PropertyFinder User Sign In
            </title>
        </Head>

        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <a className={styles.logoLink} href="/">
                    <div>
                        <Image src="/static/logo.png" alt="PropertyFinder logo"
                                width="128px" height="34px"/>    
                    </div>
                </a>
            </div>
        </header>


        <main className={styles.main}>
            <div className={styles.mainWrapper}>

                <h1 className={styles.signinHeader}>Provide the Apartment Sell Information</h1>
                
                <input type="text" placeholder="Area(square feet)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>
                
                <input type="text" placeholder="Base Price(Taka)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Number of floors" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Apartment type(Residential/Commercial)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Base Price(Taka)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Parking Space(Available/Not Available)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Which FLoor?(G,1,2...)" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="House Number" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Road Number" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Block/Sector" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>


                <input type="text" placeholder="Area name" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>


                <input type="text" placeholder="Post Code" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>


                <input type="text" placeholder="District" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>

                <input type="text" placeholder="Division" className={styles.emailInput} />
                
                <p className={styles.userMsg} >{userMsg}</p>
                
                <label for="myfile" className={styles.label}>Upload an image</label>

                <input type="file" id="myfile" name="myfile" className={styles.fileChooser} multiple="multiple"/> 
 
                
                <button  className={styles.loginBtn}>Post</button>
            </div>
        </main>
    </div>
    )
}

export default SellForm;