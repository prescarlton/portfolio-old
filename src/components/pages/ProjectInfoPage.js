const ProjectInfoPage = (props) => {

    const {id} = props.match.params
    return (
        <div className='projectInfo'>
            project with id {id}
        </div>
    )
}

export default ProjectInfoPage;