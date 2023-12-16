import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
function EditSide(props) {
  return (
    <>
      <div className='editSide'>
        <div className='buttonInit'>
        <button onClick={() => props.handleLoadExample()}>Load Example</button>
        <button className='buttonInitClear' onClick={() => props.handleClear()}>Clear Example</button>
        </div>
        
        <PersonalForm {...props}></PersonalForm>
        <EducationForm {...props}></EducationForm>
        <ExperienceForm {...props}></ExperienceForm>
      </div>
    </>
  )
}
EditSide.propTypes = {
  handleLoadExample:PropTypes.func,
  handleClear:PropTypes.func,
}
export default EditSide
