
import '../styles/EditSide.css'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
function EditSide(props) {
  return (
    <>
      <div className='editSide'>
        <PersonalForm {...props}></PersonalForm>
        <EducationForm {...props}></EducationForm>
        <ExperienceForm {...props}></ExperienceForm>
      </div>
    </>
  )
}
export default EditSide
