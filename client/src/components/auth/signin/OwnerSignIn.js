import styles from "./SignInStyle.module.css";
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const OwnerSignIn = ({login, isAuthenticated}) => {

    let navigation = useNavigate();
    //for dispalying user message about valid email input
    // keeping state using react hooks
    const [emailMsg,setEmailMsg] = useState('')
    const [passwordMsg, setPasswordMsg] = useState('')
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const handleLoginWIthEmail = e => {
        e.preventDefault();

        console.log("Handle login with email clalled!");
        // check if email exists from database
        if (!email) {
            console.log("Email" , email);
            setEmailMsg('Please enter a valid email address');
        } else if (!password) {
            setPasswordMsg('Please enter correct password');
        } else{
            //route to dashboard
            login(email, password);
        }  
    }

    const onSubmit = e => {
        console.log("Submitting");
    }

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });


    if (isAuthenticated) {
        navigation('/dashboard');
    }

    return( 
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <a className={styles.logoLink} href="/">
                    <div>
                        <img src="/static/logo.png" alt="PropertyFinder logo" width="128px" height="34px"/>    
                    </div>
                </a>
            </div>
        </header>
        

        <form className="form" onSubmit={e => onSubmit(e)}>
            <main className={styles.main}>
                <div className={styles.mainWrapper}>

                    <h1 className={styles.signinHeader}>Sign In as User</h1>
                    
                    <input type="text" name="email" value={email} placeholder="Email Address" className={styles.emailInput} onChange={e => onChange(e)}/>
                    
                    <p className={styles.userMsg} >{emailMsg}</p>


                    <input type="password" name="password" value={password} placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)}/>
                    
                    <p className={styles.userMsg} >{passwordMsg}</p>
                    
                    <button onClick = {handleLoginWIthEmail} className={styles.loginBtn}>Sign In</button>
                </div>
            </main>
        </form>
    </div>
    )
}

OwnerSignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(OwnerSignIn);