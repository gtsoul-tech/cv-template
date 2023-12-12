import PropTypes from 'prop-types';
import './EditSide.css'
import Input from "./Input"

function PersonalForm({fullName,email,phoneNumber,address,handleChangeFullName,handleChangeEmail,handleChangePhoneNumber,handleChangeAddress}){

    return (
        <>
            <div className='personalDetails'>
                <h3 id="personalTitle">Personal Details</h3>
                <Input label="Full name" value={fullName} handleChange={handleChangeFullName} placeholder="First and last name" />
                <Input label="Email" value={email} handleChange={handleChangeEmail} placeholder="Enter email" recommended={true} />
                <Input label="Phone number" value={phoneNumber} handleChange={handleChangePhoneNumber} placeholder="Enter phone number" recommended={true} />
                <Input label="Address" value={address} handleChange={handleChangeAddress} placeholder="City, Country" recommended={true} />
            
            </div>
        </>
    )
}
PersonalForm.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    handleChangeAddress:PropTypes.func,
    handleChangeEmail:PropTypes.func,
    handleChangeFullName:PropTypes.func,
    handleChangePhoneNumber:PropTypes.func
}
export default PersonalForm