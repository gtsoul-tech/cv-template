
import '../styles/EditSide.css'
import HatSvg from "../assets/hat.svg";
import { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function EducationForm(props){
    const [show, setShow] = useState('');

    
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

                    <Input label="School" value={props.school} handleChange={props.handleChangeSchool} placeholder="Enter school / university" />
                    <Input label="Degree" value={props.degree} handleChange={props.handleChangeDegree} placeholder="Enter degree / Field Of Study" />
                    <Input label="Start Date" value={props.startDate} handleChange={props.handleChangeStartDate} placeholder="Enter start date" />
                    <Input label="End Date" value={props.endDate} handleChange={props.handleChangeEndDate} placeholder="Enter end date" />
                    <Input label="Location" value={props.location} handleChange={props.handleChangeLocation} placeholder="Enter location" optional={false} />
                    
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
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    handleChangeSchool:PropTypes.func,
    handleChangeDegree:PropTypes.func,
    handleChangeStartDate:PropTypes.func,
    handleChangeEndDate:PropTypes.func,
    handleChangeLocation:PropTypes.func,
}
export default EducationForm