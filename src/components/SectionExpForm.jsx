import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import Input from './Input';
function SectionExpForm(props){
    return (
        <form onSubmit={props.handleSubmit} className='inputsEducation'>
            
            <Input label="Company Name" name="company" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.company} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter company" />
            <Input label="Position" name="position" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.position} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter Position Title" />
            <Input label="Start Date" name="startDate" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.startDate} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter start date" />
            <Input label="End Date" name="endDate" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.endDate} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter end date" />
            <Input label="Location" name="location" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.location} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter location" optional={true} />
            <Input label="Description" name="description" value={props.experiences.find( c=> c.id ===props.lastExperienceId).experience.description} handleChange={() => props.handleEditExperiences(event,props.lastExperienceId)} placeholder="Enter description" optional={true} />
            
            <div className="formButtons">
            <button type="button" onClick={() => {
                props.handleDeleteExperiences(props.lastExperienceId)
                props.handleSetShowExperienceForm(false)
                props.handleSetShowEditExperienceForm(false)
                props.handleSetShow(true)
            }}>
                Delete
            </button>
           
            <button style={{ backgroundColor: 'lightblue', color: 'white'}} onClick={() => {
                props.handleSaveExperiences()
                props.handleSetShow(true)
            }}>
                Save
            </button>
            </div>
        </form>
    )
}
SectionExpForm.propTypes = {
    
    handleSetShow:PropTypes.func,
    handleSetShowExperienceForm:PropTypes.func,
    experiences:PropTypes.array,
    lastExperienceId:PropTypes.any,
    handleSaveExperiences:PropTypes.func,
    handleEditExperiences:PropTypes.func,
    handleSubmit: PropTypes.func,
    handleSetShowEditExperienceForm:PropTypes.func,
    handleDeleteExperiences:PropTypes.func,
    cancelExperiences:PropTypes.func,
}
export default SectionExpForm
