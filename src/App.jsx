//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import EditSide from './components/EditSide'
import DisplaySide from './components/DisplaySide'
let degreeId=0;
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
  
  const degree = {
    school:"",
    degreeTitle:"",
    startDate:"",
    endDate:"",
    location:"",
  }
  const[degrees,setDegrees] = useState([
    { id: degreeId++, degree: degree }
  ]);
  
  function handleSaveDegrees(degree){
    setDegrees(// Replace the state
      [ // with a new array
        ...degrees, // that contains all the old items
        { id: degreeId++, degree: degree } // and one new item at the end
      ]
    );
  }
  
  function handleEditDegrees(degree,degreeId){
    const nextDegrees = degrees.map( (current) => {
      if(current.id === degreeId ){
        return { id:degreeId, degree:degree};
      } else {

        return current;
      }
    });
    setDegrees(// Replace the state
      [ // with a new array
        ...nextDegrees
      ]
    );
    console.log(nextDegrees);
    console.log(degrees);
    
  }
  /*
  function handleDeleteDegrees(current){
    setDegrees(
      degrees.filter(d =>
        d.id !== current.id
      )
    );
    setDegrees(// Replace the state
      [ // with a new array
        ...degrees, // that contains all the old items
        { id: degreeId++, degree: degree } // and one new item at the end
      ]
    );
  }*/

  return (
    <>
      <div className='app'>
        <EditSide
        person={person}
        //degree={degree}
        degreeId={degreeId}
        degrees={degrees}
        handleEditDegrees={handleEditDegrees}
        handleSaveDegrees={handleSaveDegrees}
        //handleDeleteDegree={handleDeleteDegrees}
        ></EditSide>
        
        <DisplaySide
        person={person}
        //degree={degree}
        degrees={degrees}
        ></DisplaySide>
      </div>
      
    </>
  )
}

export default App

