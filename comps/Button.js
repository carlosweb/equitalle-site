import styles from '../styles/Header.module.scss'

export default function Button({ name, color }) {
    return (
        <div>
            <button className={color}>{name}</button>
        </div>
    )
}