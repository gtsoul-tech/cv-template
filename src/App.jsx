//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import EditSide from './components/EditSide'
import DisplaySide from './components/DisplaySide'

function App() {
  const[person,setPerson] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    address:""
  })
  function handleChangeFullName(e) {
    setPerson({
      ...person, // Copy the old fields
      fullName: e.target.value // But override this one
    });
  }
  function handleChangeEmail(e) {
    setPerson({
      ...person, // Copy the old fields
      email: e.target.value // But override this one
    });
  }
  function handleChangePhoneNumber(e) {
    setPerson({
      ...person, // Copy the old fields
      phoneNumber: e.target.value // But override this one
    });
  }
  function handleChangeAddress(e) {
    setPerson({
      ...person, // Copy the old fields
      address: e.target.value // But override this one
    });
  }

  const[degree,setDegree] = useState({
    school:"",
    degree:"",
    startDate:"",
    endDate:"",
    location:""
  })
  



  return (
    <>
      <div className='app'>
        <EditSide
        person={person}
        handleChangeAddress={handleChangeAddress}
        handleChangeFullName={handleChangeFullName}
        handleChangePhoneNumber={handleChangePhoneNumber}
        handleChangeEmail={handleChangeEmail}
        ></EditSide>
        
        <DisplaySide
        person={person}>
        </DisplaySide>
      </div>
      
    </>
  )
}

export default App
