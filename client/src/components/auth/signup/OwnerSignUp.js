import styles from "./SignUpStyle.module.css";
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserSignUp = (props) => {
    let navigation = useNavigate();

    //for dispalying user message about valid email input
    // const [emailMsg,setEmailMsg] = useState('')
    // const [nameMsg, setNameMsg] = useState('');
    // const [passMsg2, setPassMsg2] = useState('');
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

    const { firstName,lastName, email,phone,nid,password } = formData;

    const onChange = async e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const handleSignup = (event) =>{
        //setUserMsg('');
        // check if email exists from database
        if(email){
            //route to dashboard
            const emailFromDB = "tanin@gmail.com";
            if(email===emailFromDB){
                //route to dashboard
                //router.push("/");
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

                <p className={styles.userMsg} ></p>

                <input type="text" name="password" value={password} placeholder="Password" className={styles.emailInput} onChange={e => onChange(e)}/>

                <p className={styles.userMsg} ></p>

                <button onClick = {handleSignup} className={styles.loginBtn}>Sign Up</button>
            </div>
        </main>
    </div>
    )
}

export default UserSignUp;