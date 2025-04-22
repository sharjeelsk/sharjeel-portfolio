import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div  className={styles.info}>
        <p>"Vision without execution is just hallucination."</p>
        <h2>
          Specializing in the <span>MERN</span> stack, I transform business ideas
          into powerful, scalable, and user-friendly applications.
        </h2>
        <p>Here's</p>
        <h1 className={styles.gradientText}>~ Sharjeel Shaikh</h1>
      </div>

      <div className={styles.profileSection}>
        <img src="/profile.png" alt="profile" />
      </div>
    </section>
  );
}