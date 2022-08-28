import styles from "./SignUpStyle.module.css";
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerOwner } from '../../../actions/auth'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OwnerSignUp = ({registerOwner, isAuthenticated}) => {
    let navigation = useNavigate();

    //for dispalying user message about valid email input
    const [emailMsg,setEmailMsg] = useState('')
    const [nameMsg, setNameMsg] = useState('');
    const [passMsg2, setPassMsg2] = useState('');
    // const [licenseMsg, setLicenseMsg] = useState('');
    const [userMsg, setUserMsg] = useState('')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName : "",
        email: '',
        phone : "",
        nid : "",
        password: '',
        confirmPass: ''
    })

    const { firstName,lastName, email,phone,nid,password,confirmPass } = formData;

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const handleSignup = (event) => {
      event.preventDefault();
      
      // check if email exists from database
      if (!email) {
          setEmailMsg('Email is required');
      } else if (!firstName) {
          setNameMsg('Name is required');
      } else if (!password || !confirmPass) {
          setPassMsg2('Password is required');
      } else{
          if (password !== confirmPass) {
              setPassMsg2('Password mismatch! Please enter valid password');
          } else {
            console.log("calling")
              registerOwner({ firstName, lastName, email,phone,nid,password });
          }
      }  
  }

  if (isAuthenticated) {
    navigation('/feed');
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

        <main className={styles.main}>
            <div className={styles.mainWrapper}>

                <h1 className={styles.signinHeader}>Sign Up as an Owner</h1>
                
                <input type="text" name="email" value={email} placeholder="Email Address" className={styles.emailInput} onChange={e => onChange(e)}/>
                
                <p className={styles.userMsg} ></p>
                
                <input type="text" name="firstName" value={firstName} placeholder="First Name" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} ></p>
                
                <input type="text" name="lastName" value={lastName} placeholder="Last Name" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} ></p>

                <input type="text" name="phone" value={phone} placeholder="Contact Number" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} ></p>

                <input type="text" name="nid" value={nid} placeholder="NID" className={styles.emailInput} onChange={e => onChange(e)}/>

                <input type="password" name="password" value={password} placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} >{passMsg2}</p>

                <input type="password" name="confirmPass" value={confirmPass} placeholder="Confirm Password" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} >{passMsg2}</p>

                <button onClick = {handleSignup} className={styles.loginBtn}>Sign Up</button>
            </div>
        </main>
    </div>
    )
}

OwnerSignUp.propTypes = {
  registerOwner: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { registerOwner })(OwnerSignUp);