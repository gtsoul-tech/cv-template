import PropTypes from 'prop-types';
import './EditSide.css'
import PersonalForm from './PersonalForm'
function EditSide({fullName,email,phoneNumber,address,handleChangeFullName,handleChangeEmail,handleChangePhoneNumber,handleChangeAddress}) {

  return (
    <>
      <div className='editSide'>
        <PersonalForm 
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleChangeAddress={handleChangeAddress}
        handleChangeFullName={handleChangeFullName}
        handleChangePhoneNumber={handleChangePhoneNumber}
        handleChangeEmail={handleChangeEmail}
        ></PersonalForm>
        <div>Education</div>
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
