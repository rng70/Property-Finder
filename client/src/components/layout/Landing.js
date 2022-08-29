import React from 'react';
import styles from './Landing.module.css';
import { Carousel, HomeCard, Button, Footer } from '../';
import { getIndexCardData } from '../../data/index-card-data';

const Landing = () => {
  const indexCardData = getIndexCardData();

  return (
    <section className={styles.landing}>
      <Carousel />
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Welcome to Property Fnder</h1>
          <p className={styles.lead}>
            Property Finder makes it easy to browse homes. When you're ready,
            you can also connect with a local agent, explore financing
            solutions, schedule home tours, and more
          </p>
          <div className={styles.btn}>
            <Button href='/register' buttonTitle="Sign Up"/>
            <Button href='/login' buttonTitle="Sign In"/>
          </div>
        </div>
      </div>
      <div className={styles.cardSection}>
        {indexCardData.map((cardData, i) => {
          return (
            <HomeCard
              key={i}
              title={cardData.title}
              description={cardData.description}
              buttonTitle={cardData.buttonTitle}
              href={cardData.href}
              image={cardData.image}
            />
          );
        })}
      </div>
      <Footer/>
    </section>
  );
};

export default Landing;
