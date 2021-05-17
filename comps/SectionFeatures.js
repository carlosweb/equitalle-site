import Box from './Box'
import section from '../styles/SectionInfo.module.scss'

export default function SectionFeature() {
    return (
        <div name="features" className={section.features}>
            <div className={section.content}>
                <Box
                    title="Caple Table Management"
                    text="Lorem impsum"
                />
                <Box
                    title="Transfer Agent"
                    text="Lorem impsum"
                />
                <Box
                    title="Portfolio Dashboard"
                    text="Lorem impsum"
                />
                <Box
                    title="Title one"
                    text="Lorem impsum"
                />
                <Box
                    title="Title one"
                    text="Lorem impsum"
                />
                <Box
                    title="Title one"
                    text="Lorem impsum"
                />
            </div>

        </div>
    )
}