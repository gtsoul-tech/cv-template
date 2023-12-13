import PersonalDetails from './PersonalDetails'
import '../styles/DisplaySide.css'
import PropTypes from 'prop-types';
function DisplaySide({person}) {
    //props
  return (
    <>
      <div className='displaySide'>
        
        <PersonalDetails person={person}></PersonalDetails>
        
      </div>
    </>
  )
}
DisplaySide.propTypes = {
    person: PropTypes.object
}
export default DisplaySide

//dinw ena set apo school
//tha kanw display loopa ta palia sto set
// kai ena kainourgio panta