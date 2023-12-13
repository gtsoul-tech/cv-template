import PropTypes from 'prop-types';
import '../styles/EditSide.css';
import Input from "./Input";

function PersonalForm(props){
    const fullName = props.person.fullName;
    const email = props.person.email;
    const phoneNumber = props.person.phoneNumber;
    const address = props.person.address;
    
    return (
        <>
            <div className='personalDetails'>
                <h3 id="personalTitle">Personal Details</h3>
                <Input label="Full name" value={fullName} handleChange={props.person.handleChangeFullName} placeholder="First and last name" />
                <Input label="Email" value={email} handleChange={props.person.handleChangeEmail} placeholder="Enter email" recommended={true} />
                <Input label="Phone number" value={phoneNumber} handleChange={props.person.handleChangePhoneNumber} placeholder="Enter phone number" recommended={true} />
                <Input label="Address" value={address} handleChange={props.person.handleChangeAddress} placeholder="City, Country" recommended={true} />
            
            </div>
        </>
    )
}
PersonalForm.propTypes = {
    person:PropTypes.object.isRequired,
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber:PropTypes.string,
    address:PropTypes.string,
    handleChangeAddress:PropTypes.func,
    handleChangeEmail:PropTypes.func,
    handleChangeFullName:PropTypes.func,
    handleChangePhoneNumber:PropTypes.func
}
export default PersonalForm