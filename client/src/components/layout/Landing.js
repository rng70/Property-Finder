import cls from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import { Card, Carousel, HomeCard } from '../';
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
            <Link to='/register' className={cls(styles.btn, styles.primary)}>
              Sign Up
            </Link>
            <Link to='/login' className={cls(styles.btn, styles.light)}>
              Login
            </Link>
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
    </section>
  );
};

export default Landing;
