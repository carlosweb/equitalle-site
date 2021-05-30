import Image from 'next/image'
import about from '../styles/SectionInfo.module.scss'
import styles from '../styles/Header.module.scss'
import Button from '../comps/Button'


export default function SectionAbout() {

    return (
        <div className={about.contentAbout} name="about">
            
                <Image 
                    src="/image-officie.jpg"
                    width={1200}
                    height={1200}
                    objectFit="cover"
                    Alt="Image officie equitalle"
                />
           
            <div className={about.info}>
                <h4>About Us</h4>
                <p>We aim to be a cost-effective property administration and equity distribution platform.</p>
                <Button name='Get in touch' color={styles.primary_button} />
            </div>
        </div>
    )
}