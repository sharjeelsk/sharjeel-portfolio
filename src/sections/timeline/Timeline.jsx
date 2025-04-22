import React from 'react';
import styles from './Timeline.module.scss';

export default function Timeline() {

  
  return (
    <section className={styles.timelineParent}>
        <h1 data-aos="fade-up">From Hello World to the World</h1>
    <div className={styles.timeline}>
      <div  className={styles.content} >
        <h3 className={styles.year}>2016</h3>
        <p data-aos="fade-right" className={styles.description}>
        My journey began with C programming — diving deep into the basics of computer science. I wasn’t just writing “Hello World”; I was solving matrix operations, handling file I/O, and exploring the very core of how computers think. It was the year I fell in love with code.
        </p>
      </div>


      <div className={styles.contentRight}>
        <h3 className={styles.year}>2017</h3>
        <p data-aos="fade-left" className={styles.description}>
        With a solid foundation in C, I moved on to C++, where I learned the power of object-oriented programming. I built logical programs — palindrome checkers, pattern generators, and more — gaining clarity on how to write clean, reusable code.
        </p>
      </div>

      <div className={styles.contentLeft}>
        <h3 className={styles.year}>2018</h3>
        <p data-aos="fade-right" className={styles.description}>
        This was a year of exploration. I started looking beyond just software and into the hardware side of things. I got hands-on with IoT projects using Raspberry Pi and Arduino. One of my favorite contributions was to an ultrasonic distance-based attendance system. This was when I first realized how impactful technology can be when it's connected to the real world.
        </p>
      </div>

      <div className={styles.contentRight}>
        <h3 className={styles.year}>2019</h3>
        <p data-aos="fade-left" className={styles.description}>
        Instead of diving straight into machine learning, I made a strategic choice: master web and mobile development first, so I could apply ML in meaningful ways later. That decision led me to HTML, CSS, and JavaScript. I built several projects, laying the groundwork for becoming a full-stack developer.
        </p>
      </div>

      <div className={styles.contentLeft}>
        <h3 className={styles.year}>2020</h3>
        <p data-aos="fade-right" className={styles.description}>
        Quarantine became a turning point. With more time to focus, I picked up React, then Node.js, and finally MongoDB. By April, I launched my first full-stack project: Blog Wep — a blog and Q&A platform where users could register, sign in with Google, post articles, and ask questions, all without AI or ChatGPT. Between June and July, I worked on freelancing projects like a subscription-based social media booster and an MLM rewards site. This was the year everything accelerated.
        </p>
      </div>

      <div className={styles.contentRight}>
        <h3 className={styles.year}>2021</h3>
        <p data-aos="fade-left" className={styles.description}>
        I shifted gears to mobile development and learned React Native. Using it, I built an application called PreAlert for a Nigerian courier company — it handled shipment tracking across drivers, warehouses, and airports, all while managing UTC-based timelines. It was my first large-scale international project, and it taught me a lot about scalability and time zones.
        </p>
      </div>

      <div className={styles.contentLeft}>
        <h3 className={styles.year}>2022</h3>
        <p data-aos="fade-right" className={styles.description}>
        <b>I joined CleverPe</b> — what started as an idea quickly turned into a product impacting thousands. As the frontend lead, I managed a team of 20 developers. Together, we built and maintained four applications that powered CleverPe’s “Buy Now, Pay Later” fintech platform. We improved user experience, optimized flows, and helped scale to over 70,000 users and 8,000 merchants. Every day brought new challenges, and it was thrilling to solve them at scale.
        </p>
      </div>

      <div className={styles.contentRight}>
        <h3 className={styles.year}>2023</h3>
        <p data-aos="fade-left" className={styles.description}>
        CleverPe’s growth continued, and I was right there — pushing boundaries as we expanded into electric vehicle integrations and onboarded new types of merchants. It was a year of refinement, enhancement, and scaling up.
        </p>
      </div>

      <div className={styles.contentLeft}>
        <h3 className={styles.year}>2024</h3>
        <p data-aos="fade-right" className={styles.description}>
        <b>I joined T72 Club in Pune</b>, leading the development of CashX — a platform designed to bring banking-like services to the unbanked. Built using the MERN stack and PostgreSQL, CashX includes kiosks, a back-office system, and a mobile app for 24/7 services like bill payments, shopping, and money transfers. This wasn’t just about coding anymore — it was about making tech accessible, reliable, and impactful in people’s daily lives.
        </p>
      </div>

      <div className={styles.contentRight}>
        <h3 className={styles.year}>2025</h3>
        <p data-aos="fade-left" className={styles.description}>
        This year marks a new chapter — a bold, global vision. I’m currently on a mission to scale CashX beyond borders, bringing it to life across the United States and Mexico. The goal is clear: empower millions with accessible financial services through intuitive technology. With a solid foundation already built, I’m now focused on optimizing performance, refining user experience, and making CashX a trusted name in international fintech. The journey is just beginning, but the destination is nothing short of impact at scale.
        </p>
      </div>
    </div>
    </section>
  )
}
