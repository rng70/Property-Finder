import React from 'react';
import styles from './HomeCard.module.css';
import { Button } from '../';

const HomeCard = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img
            alt={props.title}
            src={props.image}
            width='500px'
            height='800px'
            className={styles.cardImage}
          />
          <h2 className={styles.title}>{props.title}</h2>
          <div className={styles.description}>
            <p className={styles.descriptionDetails}>{props.description}</p>
          </div>
          <Button buttonTitle={props.buttonTitle}/>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
