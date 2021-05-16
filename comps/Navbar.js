import { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.scss'
import classnames from 'classnames';

export default function Navbar() {

    const [navbar, setNavbar] = useState(false)


    const navbarChanged = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    return (
        <div className={classnames(styles.menu, styles.active)}>
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



