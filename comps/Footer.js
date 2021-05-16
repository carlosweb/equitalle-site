import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faWhatapp } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <h1>Do you have any question? <br /> Feel free to contact</h1>
                    <h3><FontAwesomeIcon icon={faWhatapp}></FontAwesomeIcon> +22 025210-805045</h3>
                    <h3><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> contato@equitalle.com.br</h3>
                </div>
            </footer>
        </div>
    )
}