import styles from '../styles/Menu.module.scss'

export default function Navbar() {
    return (
        <div className={styles.menu}>
            <nav>
                <div className="logo">Equitalle</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>

    )
}