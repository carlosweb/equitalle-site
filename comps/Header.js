import styles from '../styles/Header.module.scss'
import PrimaryButton from '../comps/PrimaryButton'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>More than investment, it's about <br /> owning your equity right</h1>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                <PrimaryButton name='Get in touch' />
            </Link>
        </div>
    )
}