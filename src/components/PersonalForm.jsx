import PropTypes from 'prop-types';
import '../styles/EditSide.css'
import Input from "./Input"

function PersonalForm(props){

    return (
        <>
            <div className='personalDetails'>
                <h3 id="personalTitle">Personal Details</h3>
                <Input label="Full name" value={props.fullName} handleChange={props.handleChangeFullName} placeholder="First and last name" />
                <Input label="Email" value={props.email} handleChange={props.handleChangeEmail} placeholder="Enter email" recommended={true} />
                <Input label="Phone number" value={props.phoneNumber} handleChange={props.handleChangePhoneNumber} placeholder="Enter phone number" recommended={true} />
                <Input label="Address" value={props.address} handleChange={props.handleChangeAddress} placeholder="City, Country" recommended={true} />
            
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