//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import EditSide from './components/EditSide'
import DisplaySide from './components/DisplaySide'
let degreeId=0;
let experienceId=0;
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
  const experience = {
    company:"",
    position:"",
    startDate:"",
    endDate:"",
    location:"",
    description:""
  }

  const[degrees,setDegrees] = useState([
    { id: degreeId, degree: degree }
  ]);
  const[experiences,setExperiences] = useState([
    { id: experienceId, experience: experience }
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
  function handleResetDegrees(){
    const nextDegrees = degrees.map( (current) => {
      if(current.id === degreeId ){
        return { id: current.id, degree:degree};
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
  function handleCancelDegrees(){
    handleResetDegrees()
  }
  function handleSaveExperiences(){
    experienceId=experienceId+1;
    setExperiences(// Replace the state
      [ // with a new array
        ...experiences, // that contains all the old items
        { id: experienceId, experience: experience } // and one new item at the end
      ]
    );
  }
  function handleDeleteExperiences(id){
    setExperiences(
      experiences.filter(c =>
        c.id !== id
      )
    );
  }
  function handleEditExperiences(event,currentExperienceId=experienceId){
    const value = event.target.value;
    const key = event.target.getAttribute('name');
    
    const found = experiences.find((current) => current.id === currentExperienceId);
    if(!found){
      setExperiences(// Replace the state
        [ // with a new array
          ...experiences, // that contains all the old items
          { id: currentExperienceId, experience: experience } // and one new item at the end
        ]
      );
    }
    
    const nextExperiences = experiences.map( (current) => {
      if(current.id === currentExperienceId ){
        current.experience[key] = value;
        return { id: current.id, experience:current.experience};
      } else {
        return current;
      }
    });
    setExperiences(// Replace the state
      [ // with a new array
        ...nextExperiences
      ]
    );
    
  }
  function handleResetExperiences(){
    const nextExperiences = experiences.map( (current) => {
      if(current.id === experienceId ){
        return { id: current.id, experience:experience};
      } else {
        return current;
      }
    });
    setExperiences(// Replace the state
      [ // with a new array
        ...nextExperiences
      ]
    );
  }
  function handleCancelExperiences(){
    handleResetExperiences()
  }
  function handleLoadExample(){
    setDegrees(// Replace the state
      [ // with a new array
      {
        id: 0,
        degree: {
          school: "University of Mock",
          degreeTitle: "Bachelor of Mockology",
          startDate: "09/15",
          endDate: "05/19",
          location: "Mock City, KM",
        },
      },
      {
        id: 1,
        degree: {
          school: "Mock State University",
          degreeTitle: "Master of Mock Science",
          startDate: "01/20",
          endDate: "12/22",
          location: "Mock Town, KM",
        },
      },
      {
        id: 2,
        degree: {
          school: "",
          degreeTitle: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      },
      ]
    );
    
    setExperiences(// Replace the state
      [ // with a new array
      {
        id: 0,
        experience: {
          company: "MockCorp",
          position: "Software Engineer",
          startDate: "06/19",
          endDate: "12/21",
          location: "Mockville, KM",
          description: "Led cross-functional teams in the development of cutting-edge artificial intelligence applications, leveraging natural language processing and machine learning. Collaborated with clients in finance and healthcare to deliver innovative solutions that streamline data analysis and decision-making processes.",
        },
      },
      {
        id: 1,
        experience: {
          company: "TechMock Solutions",
          position: "Senior Developer",
          startDate: "01/22",
          endDate: "06/23",
          location: "Mockburg, KM",
          description: "Managed end-to-end software development lifecycle for a series of e-commerce platforms, enhancing user experience and optimizing performance. Spearheaded the integration of advanced payment gateways and implemented responsive design principles, resulting in a 20% increase in user engagement and a 15% boost in conversion rates.",
        },
      },
      {
        id: 2,
        experience: {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      },
      ]
    );
    degreeId=2;
    experienceId=2;
    setPerson({
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main Street",
    })
  }
  function handleClear(){
    setDegrees(// Replace the state
      [ // with a new array
     
      {
        id: 0,
        degree: {
          school: "",
          degreeTitle: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      },
      ]
    );
    
    setExperiences(// Replace the state
      [ // with a new array
      
      {
        id: 0,
        experience: {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      },
      ]
    );
    degreeId=0;
    experienceId=0;
    setPerson({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    })
  }



  const [showBoth, setShowBoth] = useState({ edu:false, exp:false});
  function handleSetShowBoth(edu,exp){
    setShowBoth({
      edu:edu,
      exp:exp
    })
  }
  return (
    <>
      <div className='app'>
        <EditSide
        person={person}
        //degree={degree}
        degrees={degrees}
        degreeId={degreeId}
        experienceId={experienceId}
        experiences={experiences}
        handleEditDegrees={handleEditDegrees}
        handleSaveDegrees={handleSaveDegrees}
        handleDeleteDegrees={handleDeleteDegrees}
        handleCancelDegrees={handleCancelDegrees}
        handleSaveExperiences={handleSaveExperiences}
        handleDeleteExperiences={handleDeleteExperiences}
        handleEditExperiences={handleEditExperiences}
        handleCancelExperiences={handleCancelExperiences}
        handleSetShowBoth={handleSetShowBoth}
        showBoth={showBoth}
        handleLoadExample={handleLoadExample}
        handleClear={handleClear}
        ></EditSide>
        
        <DisplaySide
        person={person}
        degrees={degrees}
        experiences={experiences}
        ></DisplaySide>
      </div>
      
    </>
  )
}

export default App

