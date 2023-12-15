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
    { id: degreeId, degree: degree }
  ]);
  function handleSaveDegrees(){
    degreeId=degreeId+1;
    setDegrees(// Replace the state
      [ // with a new array
        ...degrees, // that contains all the old items
        { id: degreeId, degree: degree } // and one new item at the end
      ]
    );
  }
  function handleDeleteDegrees(id){
    setDegrees(
      degrees.filter(c =>
        c.id !== id
      )
    );
  }
  function handleEditDegrees(event,currentDegreeId=degreeId){
    const value = event.target.value;
    const key = event.target.getAttribute('name');
    
    
    const found = degrees.find((current) => current.id === currentDegreeId);
    if(!found){
      setDegrees(// Replace the state
        [ // with a new array
          ...degrees, // that contains all the old items
          { id: currentDegreeId, degree: degree } // and one new item at the end
        ]
      );
    }
    
    const nextDegrees = degrees.map( (current) => {
      if(current.id === currentDegreeId ){
        current.degree[key] = value;
        return { id: current.id, degree:current.degree};
      } else {
        return current;
      }
    });
    setDegrees(// Replace the state
      [ // with a new array
        ...nextDegrees
      ]
    );
    
  }
  
  return (
    <>
      <div className='app'>
        {console.log(degrees)}
        {console.log(degreeId)}
        
        <EditSide
        person={person}
        //degree={degree}
        degrees={degrees}
        degreeId={degreeId}
        handleEditDegrees={handleEditDegrees}
        handleSaveDegrees={handleSaveDegrees}
        handleDeleteDegrees={handleDeleteDegrees}
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

