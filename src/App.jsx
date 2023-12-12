//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import EditSide from './components/EditSide'
import DisplaySide from './components/DisplaySide'

function App() {
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
      <div className='app'>
        <EditSide
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleChangeAddress={handleChangeAddress}
        handleChangeFullName={handleChangeFullName}
        handleChangePhoneNumber={handleChangePhoneNumber}
        handleChangeEmail={handleChangeEmail}></EditSide>
        
        <DisplaySide
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleChangeAddress={handleChangeAddress}
        handleChangeFullName={handleChangeFullName}
        handleChangePhoneNumber={handleChangePhoneNumber}
        handleChangeEmail={handleChangeEmail}></DisplaySide>
      </div>
      
    </>
  )
}

export default App
