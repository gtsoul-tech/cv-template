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
    address:"",
    handleChangeAddress:function(e) {
      setPerson((prevPerson)=> ({
        ...prevPerson, // Copy the old fields
        address: e.target.value // But override this one
      }));
    },
    handleChangeFullName:function(e) {
      setPerson((prevPerson)=> ({
        ...prevPerson, // Copy the old fields
        fullName: e.target.value // But override this one
      }));
    },
    handleChangeEmail:function(e) {
      setPerson((prevPerson)=> ({
        ...prevPerson, // Copy the old fields
        email: e.target.value // But override this one
      }));
    },
    handleChangePhoneNumber:function(e) {
      setPerson((prevPerson)=> ({
        ...prevPerson, // Copy the old fields
        phoneNumber: e.target.value // But override this one
      }));
    }

  })
  const[degree,setDegree] = useState({
    school:"",
    degreeTitle:"",
    startDate:"",
    endDate:"",
    location:"",
    handleChangeSchool:function(e) {
      setDegree((prevDegree)=> ({
        ...prevDegree, // Copy the old fields
        school: e.target.value // But override this one
      }));
    },
    handleChangeDegree:function(e) {
      setDegree((prevDegree)=> ({
        ...prevDegree, // Copy the old fields
        degreeTitle: e.target.value // But override this one
      }));
    },
    handleChangeStartDate:function(e) {
      setDegree((prevDegree)=> ({
        ...prevDegree, // Copy the old fields
        startDate: e.target.value // But override this one
      }));
    },
    handleChangeEndDate:function(e) {
      setDegree((prevDegree)=> ({
        ...prevDegree, // Copy the old fields
        endDate: e.target.value // But override this one
      }));
    },
    handleChangeLocation:function(e) {
      setDegree((prevDegree)=> ({
        ...prevDegree, // Copy the old fields
        location: e.target.value // But override this one
      }));
    },
  })
  const[degrees,setDegrees] = useState([])

  return (
    <>
      <div className='app'>
        <EditSide
        person={person}
        degree={degree}
        ></EditSide>
        
        <DisplaySide
        person={person}
        degree={degree}
        ></DisplaySide>
      </div>
      
    </>
  )
}

export default App

