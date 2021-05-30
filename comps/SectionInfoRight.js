import section from '../styles/SectionInfo.module.scss'
import Image from 'next/image'

export default function SectionInfoRight({ title, paragrafo, img }) {
    return (
        <div className={section.left_section}>
            <div className={section.content}>
                <Image src={`${img}`} width={1600} height={1600} />
                <div className={section.info}>
                    <h1>{title}</h1>
                    <p>{paragrafo}</p>
                </div>
            </div>
        </div>
    )
}