import section from '../styles/SectionInfo.module.scss'

export default function SectionInfoRight({ title, paragrafo, img }) {
    return (
        <div className={section.left_section}>
            <div className={section.content}>
                <img src={img} />
                <div className={section.info}>
                    <h1>{title}</h1>
                    <p>{paragrafo}</p>
                </div>
            </div>
        </div>
    )
}