
import '../styles/EditSide.css'
import HatSvg from "../assets/hat.svg";
import { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function EducationForm(props){
    const [show, setShow] = useState('');
    const school=props.degree.school;
    const degreeTitle=props.degree.degreeTitle;
    const startDate=props.degree.startDate;
    const endDate=props.degree.endDate;
    const location=props.degree.location;
 
    
    return (
        <>
        
            <div className='educationForm'>
                <div className='educationTitle'>
                <button className='dropdownButton' onClick={() => setShow(!show)}>
                    <img src={HatSvg} alt="hat icon" width="30px" height="30px"/>
                    <h3 className='edutitle'>Education</h3>
                    <div className='symbolButton'>{show ? "↑" : "↓"}</div>
                    </button>
                </div>
                {show ? <>
                    <form action="" className='inputsEducation'>

                    <Input label="School" value={school} handleChange={props.degree.handleChangeSchool} placeholder="Enter school / university" />
                    <Input label="Degree" value={degreeTitle} handleChange={props.degree.handleChangeDegree} placeholder="Enter degree / Field Of Study" />
                    <Input label="Start Date" value={startDate} handleChange={props.degree.handleChangeStartDate} placeholder="Enter start date" />
                    <Input label="End Date" value={endDate} handleChange={props.degree.handleChangeEndDate} placeholder="Enter end date" />
                    <Input label="Location" value={location} handleChange={props.degree.handleChangeLocation} placeholder="Enter location" optional={false} />
                    
                    <div className="formButtons">
                    <button onClick={() => setShow(!show)}>
                        Delete
                    </button>
                    <button onClick={() => setShow(!show)}>
                        Cancel
                    </button>
                    <button style={{ backgroundColor: 'lightblue', color: 'white'}} onClick={() => setShow(!show)}>
                        Save
                    </button>
                    
                    </div>
                    </form>
                    </>: null}
            </div>
        </>
    )
}
EducationForm.propTypes = {

    degree: PropTypes.object.isRequired,
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
}
export default EducationForm