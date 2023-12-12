import { useState } from 'react';
import './EditSide.css'
import PersonalForm from './PersonalForm'
function EditSide() {
    const [fullName, setText] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    function handleChangeFullName(e) {
        setText(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }
    function handleChangeAddress(e) {
        setAddress(e.target.value);
    }

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

export default EditSide
