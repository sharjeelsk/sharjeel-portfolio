import React from 'react'
import styles from './Contact.module.scss'
import Gmail from '../../assets/contact-icons/gmail.svg'
import LinkedIn from '../../assets/contact-icons/linkedin.svg'
import Instagram from '../../assets/contact-icons/instagram.svg'

export default function Contact() {
  return (
    <div className={styles.contact}>
        <h1>Catch Me On Your Favorite Platform</h1>
        <p>Want to connect? Just tap an icon and let’s make it happen — whether it’s a quick hello, a collaboration, or a deep conversation.</p>

        <div className={styles.contactIcons}>
            <a href="https://www.linkedin.com/in/sharjeelsktg/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/sharjeelshaikh/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="instagram" />
            </a>
            <a href="mailto:sharjeelarts@gmail.com" target="_blank" rel="noreferrer">
                <img src={Gmail} alt="gmail" />
            </a>
        </div>
    </div>
  )
}
