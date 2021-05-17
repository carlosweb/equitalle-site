import Box from './Box'
import section from '../styles/SectionInfo.module.scss'

export default function SectionFeature() {
    return (
        <div className={section.features}>
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
    )
}