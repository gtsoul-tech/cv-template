import PersonalDetails from './PersonalDetails'
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import '../styles/DisplaySide.css';
import PropTypes from 'prop-types';
function DisplaySide({person,degrees,experiences,fontColorLayout}) {
  let class1;
  if(fontColorLayout.font == "mono"){
    class1="displayFontMono";
  }
  else if(fontColorLayout.font == "PTSerif"){
    class1="displayFontPTSerif";
  }
  else {
    class1="displayFontSansSerif";
  }
  return (
    <>
    <div className={`displaySide ${class1}`}>
      {fontColorLayout.layout === 'top' ?
      <div className={`top`}>
        <PersonalDetails 
          person={person}
          backgroundColor={fontColorLayout.color}
        ></PersonalDetails>
        <EducationDetails 
        degrees={degrees}
        backgroundColor={fontColorLayout.color}
        ></EducationDetails>
        <ExperienceDetails 
        experiences={experiences}
        backgroundColor={fontColorLayout.color}
        ></ExperienceDetails>
      </div>
      :
      fontColorLayout.layout=== 'left' ? 
      <div className={`left`}>
        <div className='displayComponentHeader'>
          <PersonalDetails 
          person={person}
          backgroundColor={fontColorLayout.color}
          ></PersonalDetails>
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
          <PersonalDetails 
          person={person}
          backgroundColor={fontColorLayout.color}
          ></PersonalDetails>
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
