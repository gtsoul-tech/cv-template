import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm';
function EditSide(props) {
  return (
    <>
      <div className='editSide'>
        <PersonalForm 
        fullName={props.fullName}
        email={props.email}
        phoneNumber={props.phoneNumber}
        address={props.address}
        handleChangeAddress={props.handleChangeAddress}
        handleChangeFullName={props.handleChangeFullName}
        handleChangePhoneNumber={props.handleChangePhoneNumber}
        handleChangeEmail={props.handleChangeEmail}
        ></PersonalForm>
        <EducationForm educationProps={props.educationProps}>
        </EducationForm>
        <div>Experience</div>
      </div>
    </>
  )
}
EditSide.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    handleChangeAddress:PropTypes.func,
    handleChangeEmail:PropTypes.func,
    handleChangeFullName:PropTypes.func,
    handleChangePhoneNumber:PropTypes.func
}
export default EditSide
