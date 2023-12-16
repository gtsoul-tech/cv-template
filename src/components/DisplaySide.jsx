import PersonalDetails from './PersonalDetails'
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import '../styles/DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({person,degrees,experiences}) {
    //props
  return (
    <>
      <div className='displaySide'>
        
        <PersonalDetails person={person}></PersonalDetails>
        <EducationDetails degrees={degrees}></EducationDetails>
        <ExperienceDetails experiences={experiences}></ExperienceDetails>
        
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    person: PropTypes.object,
    degrees:PropTypes.array,
    experiences:PropTypes.array
}
export default DisplaySide
