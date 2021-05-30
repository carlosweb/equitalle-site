import styles from '../styles/Box.module.scss'

export default function Box({ icon, title, text }) {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <img src={`/${icon}`} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    ) 
}