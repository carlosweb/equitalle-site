import styles from '../styles/Footer.module.scss'


export default function Footer() {
    return (
        <div name="contact" className={styles.contact}>
            <footer className={styles.footer}>
                <div className={styles.location}>
                    <img src="/location.svg" />
                    <p>269 King Str, 05th Floor, Utral Hosue Building, Melbourne, VIC 3000, Australia</p>
                </div>

                <div className={styles.call}>
                    <img src="/call.svg" />
                    <h3>Let's talk today</h3>
                    <p>+1 (123)-456-7890</p>
                </div>

                <div className={styles.email}>
                    <img src="/email1.svg" />
                    <h3>We are here to help</h3>
                    <p>info@equitalle.ca</p>
                </div>

            </footer>
        </div>
    )
}