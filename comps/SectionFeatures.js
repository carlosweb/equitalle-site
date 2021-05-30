import Box from './Box'
import section from '../styles/SectionInfo.module.scss'

export default function SectionFeature() {
    return (
        <div name="features" className={section.features}>
            <div className={section.content}>
                <Box
                    icon="ereader.svg"
                    title="Digital Ownership Ledger"
                    text="Lorem impsum"
                />
                <Box
                    icon="hand.svg"
                    title="Finance & Property Management"
                    text="Lorem impsum"
                />
                <Box
                    icon="monitor.svg"
                    title="Automated Prot Distribution"
                    text="Lorem impsum"
                />
            </div>

        </div>
    )
}