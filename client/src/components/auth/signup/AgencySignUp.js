
import styles from "./SignUpStyle.module.css";
import {useState } from 'react';
import { registerAgency } from '../../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const AgencySignUp = ({registerAgency, isAuthenticated}) => {
    let navigation = useNavigate();
    
    //for dispalying user message about valid email input
    const [emailMsg,setEmailMsg] = useState('')
    const [nameMsg, setNameMsg] = useState('');
    const [passMsg2, setPassMsg2] = useState('');
    const [licenseMsg, setLicenseMsg] = useState('');
    const [year, setYear] = useState('')
    
    const [formData, setFormData] = useState({
        name: 'Homeland',
        email: 'homeland@gmail.com',
        password: '123456',
        confirmPass: '123456',
        tradeLicenseNo: '170506817050',
        yearOfEstablishment: Date.now(),
        userType: 'agency'
    })

    const { name, email, tradeLicenseNo, password, confirmPass, yearOfEstablishment, userType } = formData;

    

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
            if (password !== confirmPass) {
                setPassMsg2('Password mismatch! Please enter valid password');
            } else {
                registerAgency({ name, email, password, tradeLicenseNo, yearOfEstablishment, userType });
            }
        }  
    }

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isAuthenticated) {
        navigation('/dashboard');
    }

    return( 
    <div className={styles.container}>
        <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href='/'>
            <div>
              <img
                src='/static/logo.png'
                alt='PropertyFinder logo'
                width='128px'
                height='34px'
              />
            </div>
          </a>
        </div>
      </header>

        <form className="form">
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
                    <p className={styles.userMsg} >{passMsg2}</p>
                        
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

AgencySignUp.propTypes = {
    registerAgency: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { registerAgency })(AgencySignUp);