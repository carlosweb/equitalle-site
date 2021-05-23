import styles from '../styles/Footer.module.scss'
// import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

export default function Footer() {
    return (
        <div name="contact">
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <h1>Let's talk today!</h1>
                    <h3> <FontAwesomeIcon icon={faCoffee} /> info@equitalle.ca</h3>
                    <h3>+1 (514) 999-8888</h3>
                </div>
            </footer>
        </div>
    )
}