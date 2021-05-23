import Box from './Box'
import section from '../styles/SectionInfo.module.scss'

export default function SectionFeature() {
    return (
        <div name="features" className={section.features}>
            <div className={section.content}>
                <Box
                    title="Digital Ownership Ledger"
                    text="Lorem impsum"
                />
                <Box
                    title="Property Financial Management"
                    text="Lorem impsum"
                />
                <Box
                    title="Automated Prot Distribution"
                    text="Lorem impsum"
                />
            </div>

        </div>
    )
}