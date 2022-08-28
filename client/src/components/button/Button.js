import React from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  let navigation = useNavigate();
  const navigationTo = props.href;

  const handleClick = () => {
    // console.log("navigation to ===> ", navigationTo)
    navigation(navigationTo);
  }
    
  return (
      <div className={styles.container}>
          <button className={styles.cardButton} onClick={handleClick}>
              {props.buttonTitle}
          </button>
    </div>
  )
    
}

export default Button;