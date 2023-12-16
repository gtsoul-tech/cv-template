
import '../styles/EditSide.css'
import WorkSvg from "../assets/work.svg";
import { useState } from 'react';
import PropTypes from 'prop-types';
import SectionExpForm from './SectionExpForm';
function ExperienceForm(props){
    const [show, setShow] = useState('');
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
      setShow(boolean)
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
                        setShow(!show)
                        setShowExperienceForm(false)
                        setShowEditExperienceForm(false)}}>
                        <img src={WorkSvg} alt="work icon" width="30px" height="30px"/>
                        <h3 className='edutitle'>Experience</h3>
                        <div className='symbolButton'>{show ? "↑" : "↓"}</div>
                    </button>
                </div>
                {show ?<>
                    
                        {props.experiences.map((current)=>{
                            return (
                              <div className="educationInfoButton" key={current.id}>
                                  { current.id !== props.experienceId ?
                                    <button key={current.id} onClick={() => {
                                      setEditExperienceId(current.id)
                                      setShowExperienceForm(false)
                                      setShowEditExperienceForm(true)
                                      setShow(false)
                                      }} className='educationInfoButton'>
                                      <div className='infoTitle'> {current.experience.company}</div>
                                    </button>
                                  :(
                                    <></>
                                  )}
                              </div>
                            );
                        })}
                        
                    <div className='educationAdd'>
                        <button className='educationButtonAdd' onClick={() => {
                          setEditExperienceId(props.experienceId)
                          setShowEditExperienceForm(false)
                          setShowExperienceForm(!showExperienceForm)
                          }}>
                          {showExperienceForm ? "-  New Experience" : "+ New Experience"}
                        </button>
                    </div>

                </>: null}
                    {showExperienceForm? <>
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
                    {showEditExperienceForm? <>
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
}
export default ExperienceForm