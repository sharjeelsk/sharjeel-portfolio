// import React from 'react'
// import styles from './Projects.module.scss'
// import CleverPe from '../../assets/project-images/cleverpe.png'
// import CashX from '../../assets/project-images/cashx.png'
// import TgCrypt from '../../assets/project-images/tgcrypt.png'
// import ZeeTv from '../../assets/project-images/zeetv.png'

// export default function Projects() {
//   return (
//     <div className={styles.projectParent}>
//         <h1>My Universe of Code</h1>
//         <p>Every project here tells a story — a story of an idea, nurtured through code, and transformed into impactful digital experiences.</p>
//     <div className={styles.projectContainer}>
//         <a href="https://cleverpe.com/" target="_blank" rel="noreferrer">
//         <div 
//         className={styles.projectCard}>
//             <img src={CleverPe} alt="CleverPe" />
//             <h3>CleverPe</h3>
            // <p>
            // CleverPe is a cutting-edge fintech platform that offers a seamless Buy Now, Pay Later experience without the need for traditional credit cards. As the Frontend Lead, I contributed to the architecture and development of four core applications that serve customers, merchants, and admins. Our goal was to create a smooth, scalable, and intuitive experience for users across various devices.
            // Built using React, Node.js, and MongoDB, CleverPe empowers users to make instant payments, track purchases, and manage finances — all within a secure and user-friendly environment. My role involved crafting clean UI, ensuring cross-platform compatibility, and optimizing performance for a rapidly growing user base.
            // </p>
//         </div>
//         </a>

//         <a href="https://cashx.ai/" target="_blank" rel="noreferrer">
//         <div className={styles.projectCard}>
//         <img src={CashX} alt="CashX" />
//             <h3>CashX</h3>
            // <p>
            // CashX is a next-generation fintech solution designed to digitize cash for underbanked communities, providing them with access to essential financial services around the clock. As the Lead Developer, I architected and built the entire platform using the MERN stack and PostgreSQL.
            // The system includes self-service kiosks, a robust back-office dashboard, and mobile apps for both Android and iOS — enabling users to perform bill payments, money transfers, mobile top-ups, and in-app shopping with ease. CashX is built for scale, with a focus on accessibility, reliability, and user-first design — aiming to empower millions across the USA and Mexico with secure, cashless experiences.
            // </p>
//         </div>
//         </a>


//         <a href="https://tgcrypt.vercel.app/" target="_blank" rel="noreferrer">
//         <div className={styles.projectCard}>
//         <img src={TgCrypt} alt="TgCrypt" />
//             <h3>Tg Crypt</h3>
//             <p>
//             TgCrypt is a blockchain-powered application built using the MERN stack, designed to facilitate secure crypto transfers across wallet addresses. It provides a simple, intuitive interface where users can send cryptocurrencies seamlessly while tracking transaction history in real-time.

// With blockchain integration at its core, TgCrypt emphasizes transparency, security, and speed, making crypto transactions accessible to both new and experienced users. From wallet address validation to live status updates, every feature is designed for reliability and ease of use.
//             </p>
//         </div>
//         </a>

//         <a href="https://zeevaccination.vercel.app/" target="_blank" rel="noreferrer">
//         <div className={styles.projectCard}>
//         <img src={ZeeTv} alt="ZeeTv" />
//             <h3>Zee Tv Vaccination Campaign</h3>
//             <p>
//             In 2021, I developed a vaccine information platform prototype for Zee TV during the height of the pandemic. The application quickly went viral, attracting an unexpectedly massive audience due to Zee TV’s reach and the critical demand for vaccination updates.

// This sudden spike in traffic required urgent scaling and infrastructure improvements, offering a hands-on lesson in handling production-level workloads, managing system resilience, and rapidly transforming a prototype into a stable, scalable solution capable of supporting enterprise-level demand.
//             </p>
//         </div>
//         </a>
    
    
//     </div>
//     </div>
    
//   )
// }

import React from 'react'
import styles from './Projects.module.scss'
import CleverPe from '../../assets/project-images/cleverpe.png'
import CashX from '../../assets/project-images/cashx.png'
import TgCrypt from '../../assets/project-images/tgcrypt.png'
import ZeeTv from '../../assets/project-images/zeetv.png'

export default function Projects() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.projectParent}>
      <h1>My Universe of Code</h1>
      <p>Every project here tells a story — a story of an idea, nurtured through code, and transformed into impactful digital experiences.</p>
      <div className={styles.projectContainer}>
        <div
          className={styles.projectCard}
          onClick={() => openInNewTab("https://cleverpe.com/")}
        >
          <img src={CleverPe} alt="CleverPe" />
          <h3>CleverPe</h3>
          <p>
            CleverPe is a cutting-edge fintech platform that offers a seamless Buy Now, Pay Later experience without the need for traditional credit cards. As the Frontend Lead, I contributed to the architecture and development of four core applications that serve customers, merchants, and admins. Our goal was to create a smooth, scalable, and intuitive experience for users across various devices.
            Built using React, Node.js, and MongoDB, CleverPe empowers users to make instant payments, track purchases, and manage finances — all within a secure and user-friendly environment. My role involved crafting clean UI, ensuring cross-platform compatibility, and optimizing performance for a rapidly growing user base.
            </p>
        </div>

        <div
          className={styles.projectCard}
          onClick={() => openInNewTab("https://cashx.ai/")}
        >
          <img src={CashX} alt="CashX" />
          <h3>CashX</h3>
          <p>
            CashX is a next-generation fintech solution designed to digitize cash for underbanked communities, providing them with access to essential financial services around the clock. As the Lead Developer, I architected and built the entire platform using the MERN stack and PostgreSQL.
            The system includes self-service kiosks, a robust back-office dashboard, and mobile apps for both Android and iOS — enabling users to perform bill payments, money transfers, mobile top-ups, and in-app shopping with ease. CashX is built for scale, with a focus on accessibility, reliability, and user-first design — aiming to empower millions across the USA and Mexico with secure, cashless experiences.
            </p>
        </div>

        <div
          className={styles.projectCard}
          onClick={() => openInNewTab("https://tgcrypt.vercel.app/")}
        >
          <img src={TgCrypt} alt="TgCrypt" />
          <h3>Tg Crypt</h3>
          <p>
            TgCrypt is a blockchain-powered application built using the MERN stack, designed to facilitate secure crypto transfers across wallet addresses. It provides a simple, intuitive interface where users can send cryptocurrencies seamlessly while tracking transaction history in real-time.

With blockchain integration at its core, TgCrypt emphasizes transparency, security, and speed, making crypto transactions accessible to both new and experienced users. From wallet address validation to live status updates, every feature is designed for reliability and ease of use.
            </p>
        </div>

        <div
          className={styles.projectCard}
          onClick={() => openInNewTab("https://zeevaccination.vercel.app/")}
        >
          <img src={ZeeTv} alt="ZeeTv" />
          <h3>Zee Tv Vaccination Campaign</h3>
          <p>
            In 2021, I developed a vaccine information platform prototype for Zee TV during the height of the pandemic. The application quickly went viral, attracting an unexpectedly massive audience due to Zee TV’s reach and the critical demand for vaccination updates.

This sudden spike in traffic required urgent scaling and infrastructure improvements, offering a hands-on lesson in handling production-level workloads, managing system resilience, and rapidly transforming a prototype into a stable, scalable solution capable of supporting enterprise-level demand.
            </p>
        </div>
      </div>
    </div>
  );
}
