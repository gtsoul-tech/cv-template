import PersonalDetails from './PersonalDetails'
import EducationDetails from './EducationDetails';
import '../styles/DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({person,degree}) {
    //props
  return (
    <>
      <div className='displaySide'>
        
        <PersonalDetails person={person}></PersonalDetails>
        <EducationDetails degree={degree}></EducationDetails>
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    person: PropTypes.object,
    degree: PropTypes.object
}
export default DisplaySide

//dinw ena set apo school
//tha kanw display loopa ta palia sto set
// kai ena kainourgio panta