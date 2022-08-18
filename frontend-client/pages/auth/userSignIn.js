import Head from "next/head";
import Image from 'next/image'
import styles from "../../styles/UserSignIn.module.css";
import {useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../actions/auth';

const UserSignIn = (props) => {

    //for dispalying user message about valid email input
    // keeping state using react hooks
    const [emailMsg, setEmailMsg] = useState('')
    const [passwordMsg, setPasswordMsg] = useState('')
    
    const [fromData, setFormData] = useState({
        email: '',
        password: ''
    })

    const router = useRouter();

    const handleLoginWIthEmail = (event) =>{
        event.preventDefault(); 

        console.log("Handle login with email clalled!");
        // check if email exists from database
        if (!email) {
            setEmailMsg('Please enter a valid email address');
        } else if (!password) {
            setPasswordMsg('Please enter correct password');
        } else{
            //route to dashboard
            login(email, password);

            if (localStorage.getToken('token')) {
                console.log("User token == ", localStorage.getToken('token'));
                router.push('/userFeed');
            } else {
                setPasswordMsg('Something went wrong. Try again :(')
            }
        } 
    }

    const onChange = async e => setFormData({ ...fromData, [e.target.name]: e.target.value });
    
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
        

<form className="form" onSubmit={e => onSubmit(e)}>
        <main className={styles.main}>
            <div className={styles.mainWrapper}>

                <h1 className={styles.signinHeader}>Sign In as User</h1>
                
                <input type="text" placeholder="Email Address" className={styles.emailInput} onChange={e => onChange(e)}/>
                
                <p className={styles.userMsg} >{emailMsg}</p>


                <input type="password" placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)}/>
                
                <p className={styles.userMsg} >{passwordMsg}</p>
                
                <button onClick = {handleLoginWIthEmail} className={styles.loginBtn}>Sign In</button>
            </div>
            </main>
            </form>
    </div>
    )
}

export default UserSignIn;