
import '../styles/EditSide.css'
import WorkSvg from "../assets/work.svg";
import { useState } from 'react';
import PropTypes from 'prop-types';
import SectionExpForm from './SectionExpForm';
function ExperienceForm(props){
    const [showExperienceForm,setShowExperienceForm] = useState("");
    const [showEditExperienceForm,setShowEditExperienceForm] = useState("");
    const [editExperienceId,setEditExperienceId] = useState(props.experienceId);
    
    function handleSubmit(event) {
      setEditExperienceId(props.experienceId);
      setShowExperienceForm(false);
      setShowEditExperienceForm(false);
      event.preventDefault(); // prevent page refresh
    }
    function handleSetShowEditExperienceForm(boolean){
      setShowEditExperienceForm(boolean)
    }
    function handleSetShowExperienceForm(boolean){
      setShowExperienceForm(boolean)
    }
    function handleSetShow(boolean){
      if(boolean=== true){
        props.handleSetShowBoth(false,true)
      }else if(boolean=== false){
        props.handleSetShowBoth(false,false)
      }
    }
    function cancelEditExperiences(){
      props.handleCancelExperiences();
    }
    function cancelNewExperiences(){
      props.handleCancelExperiences();
    }

    return (
        <>
            <div className='educationForm'>
            <div className='educationTitle'>
                    <button className='dropdownButton' onClick={() => {
                        handleSetShow(!props.showBoth.exp)
                        setShowExperienceForm(false)
                        setShowEditExperienceForm(false)}}>
                        <img src={WorkSvg} alt="work icon" width="30px" height="30px"/>
                        <h3 className='edutitle'>Experience</h3>
                        <div className='symbolButton'>{props.showBoth.exp ? "↑" : "↓"}</div>
                    </button>
                </div>
                {props.showBoth.exp ?<>
                    
                        {props.experiences.map((current)=>{
                            return (
                              <div className="educationInfoButton" key={current.id}>
                                  { current.id !== props.experienceId ?
                                    <button key={current.id} onClick={() => {
                                      setEditExperienceId(current.id)
                                      setShowExperienceForm(false)
                                      setShowEditExperienceForm(true)
                                      }} className='educationInfoButton'>
                                      <div className='infoTitle'> {current.experience.company}</div>
                                    </button>
                                  :(
                                    <></>
                                  )}
                              </div>
                            );
                        })}
                    {!showEditExperienceForm ?
                    <div className='educationAdd'>
                        <button className='educationButtonAdd' onClick={() => {
                          setEditExperienceId(props.experienceId)
                          setShowEditExperienceForm(false)
                          setShowExperienceForm(!showExperienceForm)
                          }}>
                          {showExperienceForm ? "-  New Experience" : "+ New Experience"}
                        </button>
                    </div>:null}

                </>: null}
                    {showExperienceForm && !props.showBoth.edu && props.showBoth.exp? <>
                        <SectionExpForm 
                        handleSetShowExperienceForm={handleSetShowExperienceForm}
                        handleSetShow={handleSetShow}
                        experiences={props.experiences}
                        showExperienceForm={showExperienceForm}
                        lastExperienceId={editExperienceId}
                        handleSaveExperiences={props.handleSaveExperiences}
                        handleEditExperiences={props.handleEditExperiences}
                        handleDeleteExperiences={cancelNewExperiences}
                        handleSetShowEditExperienceForm={handleSetShowEditExperienceForm}
                        handleSubmit={handleSubmit}
                        cancelExperiences={cancelEditExperiences}
                        ></SectionExpForm>
                    </>: 
                        null
                    }
                    {showEditExperienceForm && !props.showBoth.edu && props.showBoth.exp? <>
                        <SectionExpForm 
                        handleSetShowExperienceForm={handleSetShowExperienceForm}
                        handleSetShow={handleSetShow}
                        experiences={props.experiences}
                        showExperienceForm={showExperienceForm}
                        lastExperienceId={editExperienceId}
                        handleSaveExperiences={cancelNewExperiences}
                        handleEditExperiences={props.handleEditExperiences}
                        handleDeleteExperiences={props.handleDeleteExperiences}
                        handleSetShowEditExperienceForm={handleSetShowEditExperienceForm}
                        handleSubmit={handleSubmit}
                        cancelExperiences={cancelNewExperiences}
                        ></SectionExpForm>
                    </>: 
                        null
                    }
            </div>
        </>
    )
}
ExperienceForm.propTypes = {
    experiences:PropTypes.array,
    experienceId:PropTypes.any,
    handleSaveExperiences:PropTypes.func,
    handleEditExperiences:PropTypes.func,
    handleDeleteExperiences:PropTypes.func,
    handleCancelExperiences:PropTypes.func,
    handleResetExperiences:PropTypes.func,
    handleSetShowBoth:PropTypes.func,
    showBoth:PropTypes.any,
}
export default ExperienceForm