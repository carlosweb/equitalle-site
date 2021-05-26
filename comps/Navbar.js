import { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.scss'
import header from '../styles/Header.module.scss'
import Button from './Button'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {

        if(window.scrollY >= 500) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, []);

    return (

        <div className={ navbar ? `${styles.menu}` : `${styles.active}`}>
            <nav>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <div className={styles.logo} ><img src="LOGO-EQUITALLE-landscape-white 1.png" /></div>
                </Link>
                <ul>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Home</li>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>About</li>
                    </Link>
                    <Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Features</li>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <li>Contact</li>
                    </Link>
                </ul>
                <Button name='Signup' color={header.secondary_button} />
            </nav>
        </div>
    )
}



