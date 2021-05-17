import { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.scss'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import classnames from 'classnames';

export default function Navbar() {

    // const [navbar, setNavbar] = useState(false)


    // const navbarChanged = () => {
    //     if (window.scrollY >= 80) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // }

    return (
        <div className={classnames(styles.menu)}>
            <nav>
                <div className="logo"><img src="LOGO-EQUITALLE-landscape-white 1.png" /></div>
                <ul>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Home</li>
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>About</li>
                    </Link>
                    <Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Features</li>
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}



