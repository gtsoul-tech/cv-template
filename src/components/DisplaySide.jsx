import PersonalDetails from './PersonalDetails'
import './DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({fullName,email,phoneNumber,address,handleChangeFullName,handleChangeEmail,handleChangePhoneNumber,handleChangeAddress}) {
    //props
  return (
    <>
      <div className='displaySide'>
        
        <PersonalDetails fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleChangeAddress={handleChangeAddress}
        handleChangeFullName={handleChangeFullName}
        handleChangePhoneNumber={handleChangePhoneNumber}
        handleChangeEmail={handleChangeEmail}></PersonalDetails>
    
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    handleChangeAddress:PropTypes.func,
    handleChangeEmail:PropTypes.func,
    handleChangeFullName:PropTypes.func,
    handleChangePhoneNumber:PropTypes.func
}
export default DisplaySide
