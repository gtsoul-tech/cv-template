
import '../styles/EditSide.css'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm';
function EditSide(props) {
  return (
    <>
      <div className='editSide'>
        <PersonalForm {...props}></PersonalForm>
        <EducationForm {...props}></EducationForm>
        <div>Experience</div>
      </div>
    </>
  )
}
export default EditSide
