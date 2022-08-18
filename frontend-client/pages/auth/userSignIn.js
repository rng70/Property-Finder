import Head from "next/head";
import Image from 'next/image'
import styles from "../../styles/UserSignIn.module.css";
import {useState } from 'react';
import {useRouter} from 'next/router';

const UserSignIn = (props) => {

    //for dispalying user message about valid email input
    // keeping state using react hooks
    const [email,setEmail] = useState('')
    const [userMsg,setUserMsg] = useState('')

    const router = useRouter();

    const handleLoginWIthEmail = (event) =>{
        setUserMsg('');
        console.log("Handle login with email clalled!");
        // check if email exists from database
        if(email){
            //route to dashboard
            const emailFromDB = "tanin@gmail.com";
            if(email==emailFromDB){
                //route to dashboard
                router.push("/");
            }else{
                setUserMsg('Something went wrong logging in');
            }
        }
        else{
            //if email is empty then show the error msg
            setUserMsg("Enter a valid email address ")
        }
        event.preventDefault();  
    }

    const handleOnChnangeEmail = (event)  =>{
        const email = event.target.value;
        setEmail(email);
    }
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

                <h1 className={styles.signinHeader}>Sign In as User</h1>
                
                <input type="text" placeholder="Email Address" className={styles.emailInput} onChange={handleOnChnangeEmail}/>
                
                <p className={styles.userMsg} >{userMsg}</p>


                <input type="text" placeholder="Password" className={styles.emailInput} onChange={handleOnChnangeEmail}/>
                
                <p className={styles.userMsg} >{userMsg}</p>
                
                <button onClick = {handleLoginWIthEmail} className={styles.loginBtn}>Sign In</button>
            </div>
        </main>
    </div>
    )
}

export default UserSignIn;