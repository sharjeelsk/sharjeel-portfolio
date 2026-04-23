import React from 'react';
import styles from './Projects.module.scss';
import CleverPe from '../../assets/project-images/cleverpe.png';
import CashX from '../../assets/project-images/cashx.png';
import TgCrypt from '../../assets/project-images/tgcrypt.png';
import ZeeTv from '../../assets/project-images/zeetv.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'CashX',
      image: CashX,
      url: 'https://cashx.ai/',
      category: 'Featured Build',
      stack: 'MERN + PostgreSQL',
      impact: 'Built for underbanked communities across kiosk, mobile, and admin platforms.',
      description:
        'CashX is a fintech ecosystem built to digitize cash and unlock essential services like bill payments, money transfers, and shopping. I led development across the full platform, with a strong focus on scale, operations, and product reliability.',
      featured: true,
    },
    {
      id: 2,
      name: 'CleverPe',
      image: CleverPe,
      url: 'https://cleverpe.com/',
      category: 'Fintech Platform',
      stack: 'React + Node.js + MongoDB',
      impact: 'Supported merchants, admins, and customers in a BNPL product ecosystem.',
      description:
        'As Frontend Lead, I contributed to the architecture and delivery of multiple production apps that made the CleverPe lending experience smoother, faster, and more scalable.',
    },
    {
      id: 3,
      name: 'Tg Crypt',
      image: TgCrypt,
      url: 'https://tgcrypt.vercel.app/',
      category: 'Web3 Product',
      stack: 'MERN + Blockchain APIs',
      impact: 'Focused on secure transfers, real-time tracking, and a simpler crypto flow.',
      description:
        'TgCrypt streamlines wallet-to-wallet crypto transfers with a clean interface, validation flows, and transaction transparency designed for both new and experienced users.',
    },
    {
      id: 4,
      name: 'Zee TV Vaccination Campaign',
      image: ZeeTv,
      url: 'https://zeevaccination.vercel.app/',
      category: 'High-Traffic Campaign',
      stack: 'Frontend Prototype + Scaled Delivery',
      impact: 'Evolved from a fast-moving campaign build into a traffic-heavy production challenge.',
      description:
        'Built during the pandemic, this vaccine information experience quickly drew massive reach. It became a practical lesson in resilience, speed, and scaling under real-world demand.',
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className={styles.projectParent}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Project Vault</p>
        <h1>Built for users, scale, and real-world impact</h1>
        <p className={styles.sectionDescription}>
          The projects tab is designed as a focused showcase: one flagship build up front,
          followed by supporting work that highlights product thinking, frontend execution,
          and production readiness.
        </p>
      </div>

      {featuredProject && (
        <article
          className={styles.featuredProject}
          onClick={() => openInNewTab(featuredProject.url)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openInNewTab(featuredProject.url);
            }
          }}
        >
          <div className={styles.featuredVisual}>
            <img src={featuredProject.image} alt={featuredProject.name} />
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.projectBadge}>{featuredProject.category}</span>
            <h2>{featuredProject.name}</h2>
            <p className={styles.stack}>{featuredProject.stack}</p>
            <p className={styles.description}>{featuredProject.description}</p>

            <div className={styles.projectStats}>
              <div>
                <span>Impact</span>
                <p>{featuredProject.impact}</p>
              </div>
              <div>
                <span>Focus</span>
                <p>Scalable product delivery, ecosystem thinking, and user trust.</p>
              </div>
            </div>

            <span className={styles.projectLink}>Open project</span>
          </div>
        </article>
      )}

      <div className={styles.projectGrid}>
        {supportingProjects.map((project) => (
          <article
            key={project.id}
            className={styles.projectCard}
            onClick={() => openInNewTab(project.url)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openInNewTab(project.url);
              }
            }}
          >
            <img src={project.image} alt={project.name} />
            <div className={styles.cardBody}>
              <span className={styles.projectBadge}>{project.category}</span>
              <h3>{project.name}</h3>
              <p className={styles.stack}>{project.stack}</p>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.impact}>{project.impact}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
