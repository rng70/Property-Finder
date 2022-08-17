import Head from "next/head";
import Image from 'next/image'
import styles from "../../styles/UserSignUp.module.css";
import {useState } from 'react';
import { useRouter } from 'next/router';
import { registerAgency } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserSignUp = ({ setAlert, registerAgency, isAuthenticated }) => {

    //for dispalying user message about valid email input
    // keeping state using react hooks
    const [emailMsg,setEmailMsg] = useState('')
    const [nameMsg, setNameMsg] = useState('');
    const [passMsg, setPassMsg] = useState('');
    const [passMsg2, setPassMsg2] = useState('');
    const [licenseMsg, setLicenseMsg] = useState('');
    const [year, setYear] = useState('');
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        license: '',
        yearEs: ''
    })

    const router = useRouter();
    const { name, email, license, password, confirmPass, yearEs } = formData;

    const handleSignUp = (event) =>{
        console.log("Handle login with email clalled!");
        // check if email exists from database
        if (!email) {
            setEmailMsg('Email is required');
        } else if (!name) {
            setNameMsg('Name is required');
        } else if (!license) {
            setLicenseMsg('License is required')
        } else if (!password || !confirmPass) {
            setPassMsg2('Password is required');
        } else if (!yearEs) { 
            setYear('Date is required'+yearEs+" t")
        } else{
            // route to dashboard
            // const emailFromDB = "tanin@gmail.com";
            if (password !== confirmPass) {
                setPassMsg2('Password mismatch! Please enter valid password');
                //route to dashboard
                // router.push("/");
            }else{
                registerAgency({ name, email, password, license, yearEs });
                router.push('/');
                setAlert('Please confirm email address');
            }
        }
        event.preventDefault();  
    }

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isAuthenticated) {
        router.push('/dashboard');
    }

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
                        
                    <input type="text" name="email" placeholder="Email Address" className={styles.emailInput} onChange={e => onChange(e)}/>
                    
                    <p className={styles.userMsg} >{emailMsg}</p>
                    
                    <input type="text" name="name" value={name} placeholder="Agency Name" className={styles.emailInput} onChange={e => onChange(e)} />

                    <p className={styles.userMsg} >{nameMsg}</p>
                    
                    <input type="text" name="license" value={license} placeholder="Trade License" className={styles.emailInput} onChange={e => onChange(e)} />

                    <p className={styles.userMsg} >{licenseMsg}</p>
                            
                    <input type="password" name="password" value={password}  placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)} />
                    <p className={styles.userMsg} >{passMsg}</p>
                        
                    <input type="password" name="confirmPass" value={confirmPass}  placeholder="Confirm Pass" className={styles.emailInput} onChange={e => onChange(e)} />
                        <p className={styles.userMsg} >{passMsg2}</p>
                        <input type="date" name="yearEs" value={yearEs} className={styles.emailInput} onChange={e => onChange(e)} />
                    <p className={styles.userMsg} >{year}</p>

                    <button onClick = {handleSignUp} className={styles.loginBtn}>Sign Up</button>
                </div>
                    
            </main>
        </form>
    </div>
    )
}

UserSignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerAgency: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, registerAgency })(UserSignUp);