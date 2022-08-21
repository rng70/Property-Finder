import Head from "next/head";
import Image from 'next/image'
import styles from "../../styles/UserSignUp.module.css";
import {useState } from 'react';
import { useRouter } from 'next/router';
import { registerAgency } from '../../actions/auth';


const UserSignUp = () => {

    //for dispalying user message about valid email input
    // keeping state using react hooks
    const [emailMsg,setEmailMsg] = useState('')
    const [nameMsg, setNameMsg] = useState('');
    const [passMsg, setPassMsg] = useState('');
    const [passMsg2, setPassMsg2] = useState('');
    const [licenseMsg, setLicenseMsg] = useState('');
    const [year, setYear] = useState('');
    
    const [formData, setFormData] = useState({
        name: 'jkjfasdfj',
        email: 'sdfkjasldjf@gajg.com',
        password: '123456',
        confirmPass: '123456',
        tradeLicenseNo: 'ertwertwertwert',
        yearOfEstablishment: Date.now()
    })

    const router = useRouter();
    const { name, email, tradeLicenseNo, password, confirmPass, yearOfEstablishment } = formData;

    

    const handleSignUp = (event) => {
        event.preventDefault();
        
        // check if email exists from database
        if (!email) {
            setEmailMsg('Email is required');
        } else if (!name) {
            setNameMsg('Name is required');
        } else if (!tradeLicenseNo) {
            setLicenseMsg('License is required')
        } else if (!password || !confirmPass) {
            setPassMsg2('Password is required');
        } else if (!yearOfEstablishment) { 
            setYear('Date is required'+yearOfEstablishment+" t")
        } else{
            // route to dashboard
            // const emailFromDB = "tanin@gmail.com";
            if (password !== confirmPass) {
                setPassMsg2('Password mismatch! Please enter valid password');
                //route to dashboard
                // router.push("/");
            } else {
                console.log("API calls here");
                console.log("Year ==> ", yearOfEstablishment);
                registerAgency({ name, email, password, tradeLicenseNo, yearOfEstablishment });
                router.push('/sellForm');
                console.log("Registration Successfull")
                // setAlert('Please confirm email address');
            }
        }  
    }

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // if (isAuthenticated) {
        // router.push('/dashboard');
    // }

    return( 
    <div className={styles.container}>
        <Head>
            <title>
                PropertyFinder User Sign Up
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

                        <h1 className={styles.signinHeader}>Sign Up as an Agency</h1>
                        
                    <input type="text" name="email" value={email} placeholder="Email Address" className={styles.emailInput} onChange={e => onChange(e)}/>
                    
                    <p className={styles.userMsg} >{emailMsg}</p>
                    
                    <input type="text" name="name" value={name} placeholder="Agency Name" className={styles.emailInput} onChange={e => onChange(e)} />

                    <p className={styles.userMsg} >{nameMsg}</p>
                    
                    <input type="text" name="tradeLicenseNo" value={tradeLicenseNo} placeholder="Trade License" className={styles.emailInput} onChange={e => onChange(e)} />

                    <p className={styles.userMsg} >{licenseMsg}</p>
                            
                    <input type="password" name="password" value={password}  placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)} />
                    <p className={styles.userMsg} >{passMsg}</p>
                        
                    <input type="password" name="confirmPass" value={confirmPass}  placeholder="Confirm Pass" className={styles.emailInput} onChange={e => onChange(e)} />
                        <p className={styles.userMsg} >{passMsg2}</p>
                        <input type="date" name="yearOfEstablishment" value={yearOfEstablishment} className={styles.emailInput} onChange={e => onChange(e)} />
                    <p className={styles.userMsg} >{year}</p>

                    <button onClick = {handleSignUp} className={styles.loginBtn}>Sign Up</button>
                </div>
                    
            </main>
        </form>
    </div>
    )
}

export default UserSignUp;