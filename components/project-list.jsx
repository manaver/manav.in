import dynamic from 'next/dynamic'
import LoadingCircle from './loading-circle'

const ProjectInfo = dynamic(() => import('@/components/project-info'), {
    loading: () => <LoadingCircle />
})

const ProjectList = ({ projects }) => {
    return <>
        {projects.map((item, index) => (
            <ProjectInfo key={index} title={item.Title} subHeading={item.Subheading} projectUrl={item.ProjectUrl}
                liveUrl={item.LiveUrl} />))}
    </>
}

export default ProjectList;