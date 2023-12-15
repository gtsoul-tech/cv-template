import PersonalDetails from './PersonalDetails'
import EducationDetails from './EducationDetails';
import '../styles/DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({person,degrees}) {
    //props
  return (
    <>
      <div className='displaySide'>
        
        <PersonalDetails person={person}></PersonalDetails>
        <EducationDetails 
          //degree={degree}
          degrees={degrees}
        ></EducationDetails>
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    person: PropTypes.object,
    //degree: PropTypes.object,
    degrees:PropTypes.array
}
export default DisplaySide
