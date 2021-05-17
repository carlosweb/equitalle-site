import styles from '../styles/Header.module.scss'

export default function PrimaryButton({ name }) {
    return (
        <div>
            <button className={styles.primary_button}>{name}</button>
        </div>
    )
}