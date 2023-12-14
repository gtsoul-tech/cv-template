
import '../styles/EditSide.css'
import HatSvg from "../assets/hat.svg";
import { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function EducationForm(props){
    const [show, setShow] = useState('');
    const [showDegreeForm,setShowDegreeForm] = useState('');
    /*const school=props.degree.school;
    const degreeTitle=props.degree.degreeTitle;
    const startDate=props.degree.startDate;
    const endDate=props.degree.endDate;
    const location=props.degree.location;
 

    */
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
        handleResetDegreeForm:function(){
          setDegree((prevDegree)=> ({
            ...prevDegree, // Copy the old fields
            school:"",
            degreeTitle:"",
            startDate:"",
            endDate:"",
            location:"", // But override this one
          }));
        }
      })
    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh
        degree.handleResetDegreeForm();
    };
    const school=degree.school;
    const degreeTitle=degree.degreeTitle;
    const startDate=degree.startDate;
    const endDate=degree.endDate;
    const location=degree.location;
    return (
        <>
            <div className='educationForm'>
            <div className='educationTitle'>
                    <button className='dropdownButton' onClick={() => {
                        setShow(!show)
                        setShowDegreeForm(false)}}>
                        <img src={HatSvg} alt="hat icon" width="30px" height="30px"/>
                        <h3 className='edutitle'>Education</h3>
                        <div className='symbolButton'>{show ? "↑" : "↓"}</div>
                    </button>
                </div>
                {show ?<>
                    {props.degrees.length >= 1 ? (
                        <>{props.degrees.map((current)=>{
                            return (
                                <button key={current.id} onClick={() => {
                                    props.handleEditDegrees()}} className='educationInfoButton'>
                                    <div className='infoTitle'> {current.degree.school}</div>
                                </button>
                            );
                        })}
                        </>
                    ) :(
                        <></>
                    )}

                    


                    
                    <div className='educationAdd'>
                        <button className='educationButtonAdd' onClick={() => setShowDegreeForm(!showDegreeForm)}>
                            {showDegreeForm ? "- Degree" : "+ Degree"}
                        </button>
                    </div>
                    {showDegreeForm ? <>
                        <form onSubmit={handleSubmit} className='inputsEducation'>
                            <Input label="School" value={school} handleChange={degree.handleChangeSchool} placeholder="Enter school / university" />
                            <Input label="Degree" value={degreeTitle} handleChange={degree.handleChangeDegree} placeholder="Enter degree / Field Of Study" />
                            <Input label="Start Date" value={startDate} handleChange={degree.handleChangeStartDate} placeholder="Enter start date" />
                            <Input label="End Date" value={endDate} handleChange={degree.handleChangeEndDate} placeholder="Enter end date" />
                            <Input label="Location" value={location} handleChange={degree.handleChangeLocation} placeholder="Enter location" optional={false} />
                            
                            <div className="formButtons">
                            <button type="button" onClick={() => {
                                setShowDegreeForm(!showDegreeForm)
                                degree.handleResetDegreeForm()}}>
                                Delete
                            </button>
                            <button type="button" onClick={() => {
                                props.handleEditDegrees(degree,props.degreeId)
                                setShowDegreeForm(!showDegreeForm)
                                degree.handleResetDegreeForm();
                            }}>
                                Cancel
                            </button>
                            <button style={{ backgroundColor: 'lightblue', color: 'white'}} onClick={() => {
                                props.handleSaveDegrees(degree)}}>
                                Save
                            </button>
                            </div>
                        </form>
                    </>: null}
                </>: null}
            </div>
        </>
    )
}
EducationForm.propTypes = {
    degrees:PropTypes.array,
    //degree: PropTypes.object.isRequired,
    degreeId:PropTypes.any,
    school: PropTypes.string,
    degreeTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate:PropTypes.string,
    location:PropTypes.string,
    handleChangeSchool:PropTypes.func,
    handleChangeDegree:PropTypes.func,
    handleChangeStartDate:PropTypes.func,
    handleChangeEndDate:PropTypes.func,
    handleChangeLocation:PropTypes.func,
    handleSaveDegrees:PropTypes.func,
    handleEditDegrees:PropTypes.func,
}
export default EducationForm