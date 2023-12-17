import PersonalDetails from './PersonalDetails'
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import '../styles/DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({person,degrees,experiences,fontColorLayout}) {
  const class1 = 'font-face-didot'

  return (
    <>
    <div className={`displaySide ${class1}`}>
      {fontColorLayout.layout === 'top' ?
      <div className={`top`}>
        <PersonalDetails person={person}></PersonalDetails>
        <EducationDetails degrees={degrees}></EducationDetails>
        <ExperienceDetails experiences={experiences}></ExperienceDetails>
      </div>
      :
      fontColorLayout.layout=== 'left' ? 
      <div className={`left`}>
        <div className='displayComponentHeader'>
          <PersonalDetails person={person}></PersonalDetails>
        </div>
        <div className='displayComponent'>
          <EducationDetails degrees={degrees}></EducationDetails>
          <ExperienceDetails experiences={experiences}></ExperienceDetails>
        </div>
      </div>
      
      :
      fontColorLayout.layout=== 'right' ? 
      <div className={`right`}>
        
        <div className='displayComponent'>
          <EducationDetails degrees={degrees}></EducationDetails>
          <ExperienceDetails experiences={experiences}></ExperienceDetails>
        </div>
        <div className='displayComponentHeader'>
          <PersonalDetails person={person}></PersonalDetails>
        </div>
      </div>
      :
      null}
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    person: PropTypes.object,
    degrees:PropTypes.array,
    experiences:PropTypes.array,
    fontColorLayout:PropTypes.object,
}
export default DisplaySide
