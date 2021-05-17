import styles from '../styles/Header.module.scss'
import PrimaryButton from '../comps/PrimaryButton'

export default function Header(){
    return (
        <div className={styles.header}>
            <h1>More than investment, it's about <br /> owning your equity right</h1>
            <PrimaryButton name='Get in touch'/>
        </div>
    )
}