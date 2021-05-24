import styles from '../styles/Header.module.scss'
import Button from './Button'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {
    return (
        <div className={styles.header} name="home">
            <h1>More than investment, it's about <br /> owning your property better!</h1>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                <Button name='Get in touch' color={styles.primary_button} />
            </Link>
        </div>
    )
}