import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import Input from './Input';
function SectionEduForm(props){
    return (
        <form onSubmit={props.handleSubmit} className='inputsEducation'>
            
            <Input label="School" name="school" value={props.degrees.find( c=> c.id ===props.lastDegreeId).degree.school} handleChange={() => props.handleEditDegrees(event,props.lastDegreeId)} placeholder="Enter school / university" />
            <Input label="Degree" name="degreeTitle" value={props.degrees.find( c=> c.id ===props.lastDegreeId).degree.degreeTitle} handleChange={() => props.handleEditDegrees(event,props.lastDegreeId)} placeholder="Enter degree / Field Of Study" />
            <Input label="Start Date" name="startDate" value={props.degrees.find( c=> c.id ===props.lastDegreeId).degree.startDate} handleChange={() => props.handleEditDegrees(event,props.lastDegreeId)} placeholder="Enter start date" />
            <Input label="End Date" name="endDate" value={props.degrees.find( c=> c.id ===props.lastDegreeId).degree.endDate} handleChange={() => props.handleEditDegrees(event,props.lastDegreeId)} placeholder="Enter end date" />
            <Input label="Location" name="location" value={props.degrees.find( c=> c.id ===props.lastDegreeId).degree.location} handleChange={() => props.handleEditDegrees(event,props.lastDegreeId)} placeholder="Enter location" optional={true} />
            
            <div className="formButtons">
            <button type="button" onClick={() => {
                props.handleDeleteDegrees(props.lastDegreeId)
                props.handleSetShowDegreeForm(false)
                props.handleSetShowEditDegreeForm(false)
                props.handleSetShow(true)
            }}>
                Delete
            </button>
           
            <button style={{ backgroundColor: 'lightblue', color: 'white'}} onClick={() => {
                props.handleSaveDegrees()
                props.handleSetShow(true)
            }}>
                Save
            </button>
            </div>
        </form>
    )
}
SectionEduForm.propTypes = {
    
    handleSetShow:PropTypes.func,
    handleSetShowDegreeForm:PropTypes.func,
    degrees:PropTypes.array,
    lastDegreeId:PropTypes.any,
    handleSaveDegrees:PropTypes.func,
    handleEditDegrees:PropTypes.func,
    handleSubmit: PropTypes.func,
    handleSetShowEditDegreeForm:PropTypes.func,
    handleDeleteDegrees:PropTypes.func,
    cancelDegrees:PropTypes.func,
}
export default SectionEduForm
