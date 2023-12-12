import PropTypes from 'prop-types';
import Input from "./Input"

function PersonalForm({fullName,email,phoneNumber,address,handleChangeFullName,handleChangeEmail,handleChangePhoneNumber,handleChangeAddress}){

    return (
        <>
            <h3>Personal Details</h3>
            <form action="">
                <Input label="Full name" value={fullName} handleChange={handleChangeFullName} placeholder="First and last name" />
                <Input label="Email" value={email} handleChange={handleChangeEmail} placeholder="Enter email" />
                <Input label="Phone number" value={phoneNumber} handleChange={handleChangePhoneNumber} placeholder="Enter phone number" />
                <Input label="Address" value={address} handleChange={handleChangeAddress} placeholder="City, Country" />
            </form>
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