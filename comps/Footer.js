import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component


export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <h1>Do you have any question? <br /> Feel free to contact us</h1>
                    <h3> +22 025210-805045</h3>
                    <h3>contato@equitalle.com.br</h3>
                </div>
            </footer>
        </div>
    )
}