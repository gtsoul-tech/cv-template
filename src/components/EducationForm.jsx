
import '../styles/EditSide.css'
import HatSvg from "../assets/hat.svg";
import { useState } from 'react';
import SectionEduForm from './SectionEduForm';
import PropTypes from 'prop-types';

function EducationForm(props){
    
    const [showDegreeForm,setShowDegreeForm] = useState("");
    const [showEditDegreeForm,setShowEditDegreeForm] = useState("");
    const [editDegreeId,setEditDegreeId] = useState(props.degreeId);
    
    function handleSubmit(event) {
      setEditDegreeId(props.degreeId);
      setShowDegreeForm(false);
      setShowEditDegreeForm(false);
      event.preventDefault(); // prevent page refresh
    }
    function handleSetShowEditDegreeForm(boolean){
      setShowEditDegreeForm(boolean)
    }
    function handleSetShowDegreeForm(boolean){
      setShowDegreeForm(boolean)
    }
    function handleSetShow(boolean){
      if(boolean=== true){
        props.handleSetShowBoth(true,false)
      }else if(boolean=== false){
        props.handleSetShowBoth(false,false)
      }
    }
    function cancelEditDegrees(){
      props.handleCancelDegrees();
    }
    function cancelNewDegrees(){
      props.handleCancelDegrees();
    }

    return (
        <>
            <div className='educationForm'>
            <div className='educationTitle'>
                    <button className='dropdownButton' onClick={() => {
                        handleSetShow(!props.showBoth.edu)
                        setShowDegreeForm(false)
                        setShowEditDegreeForm(false)}}>
                        <img src={HatSvg} alt="hat icon" width="30px" height="30px"/>
                        <h3 className='edutitle'>Education</h3>
                        <div className='symbolButton'>{props.showBoth.edu ? "↑" : "↓"}</div>
                    </button>
                </div>
                {props.showBoth.edu ?<>
                    
                        {props.degrees.map((current)=>{
                            return (
                              <div className="educationInfoButton" key={current.id}>
                                  { current.id !== props.degreeId ?
                                    <button key={current.id} onClick={() => {
                                      setEditDegreeId(current.id)
                                      setShowDegreeForm(false)
                                      setShowEditDegreeForm(true)
                                      handleSetShow(false)
                                      }} className='educationInfoButton'>
                                      <div className='infoTitle'> {current.degree.school}</div>
                                    </button>
                                  :(
                                    <></>
                                  )}
                              </div>
                            );
                        })}
                        
                    <div className='educationAdd'>
                        <button className='educationButtonAdd' onClick={() => {
                          setEditDegreeId(props.degreeId)
                          setShowEditDegreeForm(false)
                          setShowDegreeForm(!showDegreeForm)
                          }}>
                          {showDegreeForm ? "-  New Degree" : "+ New Degree"}
                        </button>
                    </div>

                </>: null}
                    {showDegreeForm && !props.showBoth.exp? <>
                        <SectionEduForm 
                          handleSetShowDegreeForm={handleSetShowDegreeForm}
                          handleSetShow={handleSetShow}
                          degrees={props.degrees}
                          showDegreeForm={showDegreeForm}
                          lastDegreeId={editDegreeId}
                          handleSaveDegrees={props.handleSaveDegrees}
                          handleEditDegrees={props.handleEditDegrees}
                          handleDeleteDegrees={cancelNewDegrees}
                          handleSetShowEditDegreeForm={handleSetShowEditDegreeForm}
                          handleSubmit={handleSubmit}
                          cancelDegrees={cancelEditDegrees}
                        ></SectionEduForm>
                    </>: 
                        null
                    }
                    {showEditDegreeForm && !props.showBoth.exp? <>
                        <SectionEduForm 
                          handleSetShowDegreeForm={handleSetShowDegreeForm}
                          handleSetShow={handleSetShow}
                          degrees={props.degrees}
                          showDegreeForm={showDegreeForm}
                          lastDegreeId={editDegreeId}
                          handleSaveDegrees={cancelNewDegrees}
                          handleEditDegrees={props.handleEditDegrees}
                          handleDeleteDegrees={props.handleDeleteDegrees}
                          handleSetShowEditDegreeForm={handleSetShowEditDegreeForm}
                          handleSubmit={handleSubmit}
                          cancelDegrees={cancelNewDegrees}
                        ></SectionEduForm>
                    </>: 
                        null
                    }
            </div>
        </>
    )
}
EducationForm.propTypes = {
    degrees:PropTypes.array,
    degreeId:PropTypes.any,
    handleSaveDegrees:PropTypes.func,
    handleEditDegrees:PropTypes.func,
    handleDeleteDegrees:PropTypes.func,
    handleCancelDegrees:PropTypes.func,
    handleResetDegrees:PropTypes.func,
    handleSetShowBoth:PropTypes.func,
    showBoth:PropTypes.any,
}
export default EducationForm