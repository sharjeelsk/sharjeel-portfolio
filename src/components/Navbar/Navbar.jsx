import React from 'react';
import styles from './Navbar.module.scss';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects', featured: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <a className={styles.brand} href="#home">
          Sharjeel.dev
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className={item.featured ? styles.projectsLink : styles.navLink}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
