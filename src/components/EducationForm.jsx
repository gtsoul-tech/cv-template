
import '../styles/EditSide.css'
import HatSvg from "../assets/hat.svg";
import { useState } from 'react';
import SectionEduForm from './SectionEduForm';
import PropTypes from 'prop-types';

function EducationForm(props){
    const [show, setShow] = useState('');
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
      setShow(boolean)
    }
    function cancelEditDegrees(){
      console.log("1")
        //keep old info

    }
    function cancelNewDegrees(){
      console.log("1")
        //blank form
    }

    return (
        <>
            <div className='educationForm'>
            <div className='educationTitle'>
                    <button className='dropdownButton' onClick={() => {
                        setShow(!show)
                        setShowDegreeForm(false)
                        setShowEditDegreeForm(false)}}>
                        <img src={HatSvg} alt="hat icon" width="30px" height="30px"/>
                        <h3 className='edutitle'>Education</h3>
                        <div className='symbolButton'>{show ? "↑" : "↓"}</div>
                    </button>
                </div>
                {show ?<>
                    
                        {props.degrees.map((current)=>{
                            return (
                              <div className="educationInfoButton" key={current.id}>
                                  { current.id !== props.degreeId ?
                                    <button key={current.id} onClick={() => {
                                      setEditDegreeId(current.id)
                                      setShowDegreeForm(false)
                                      setShowEditDegreeForm(true)
                                      setShow(false)
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
                          setShow(false)
                          }}>
                          {showDegreeForm ? "-  New Degree" : "+ New Degree"}
                        </button>
                    </div>

                </>: null}
                    {showDegreeForm? <>
                        <SectionEduForm 
                          handleSetShowDegreeForm={handleSetShowDegreeForm}
                          handleSetShow={handleSetShow}
                          degrees={props.degrees}
                          showDegreeForm={showDegreeForm}
                          lastDegreeId={editDegreeId}
                          handleSaveDegrees={props.handleSaveDegrees}
                          handleEditDegrees={props.handleEditDegrees}
                          handleDeleteDegrees={props.handleDeleteDegrees}
                          handleSetShowEditDegreeForm={handleSetShowEditDegreeForm}
                          handleSubmit={handleSubmit}
                          handleCancelDegrees={cancelEditDegrees}
                        ></SectionEduForm>
                    </>: 
                        null
                    }
                    {showEditDegreeForm? <>
                        <SectionEduForm 
                          handleSetShowDegreeForm={handleSetShowDegreeForm}
                          handleSetShow={handleSetShow}
                          degrees={props.degrees}
                          showDegreeForm={showDegreeForm}
                          lastDegreeId={editDegreeId}
                          handleSaveDegrees={props.handleSaveDegrees}
                          handleEditDegrees={props.handleEditDegrees}
                          handleDeleteDegrees={props.handleDeleteDegrees}
                          handleSetShowEditDegreeForm={handleSetShowEditDegreeForm}
                          handleSubmit={handleSubmit}
                          handleCancelDegrees={cancelNewDegrees}
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
    //degree: PropTypes.object.isRequired,
    degreeId:PropTypes.any,
    handleSaveDegrees:PropTypes.func,
    handleEditDegrees:PropTypes.func,
    handleDeleteDegrees:PropTypes.func,
}
export default EducationForm