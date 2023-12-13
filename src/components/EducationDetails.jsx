import PropTypes from 'prop-types';
import '../styles/DisplaySide.css';

function EducationDetails(props){
    
    const degrees= [];
    degrees.push(props.degree);
    return(<>
        <div className='educationDisplay'>
        {degrees.length >= 1 ? (
            <>
            <h2 className='educationDisplayTitle'> Education </h2>
            {degrees.map((degree)=>{
                return (
                <>
                    <div className='educationInfo'>
                    <div className='infoDate'>{degree.startDate} - {degree.endDate}</div>
                    <div className='infoTitle'> {degree.school}</div>
                    <div className='infoLocation'>{degree.location}</div>
                    <div className='infoDescription'>{degree.degreeTitle}</div>
                    </div>
                </>
                );
            })}
            
            </>
                ) : (
                    <div>{' '}
                    </div>
                )}
        </div>
    </>)
}
EducationDetails.propTypes = {
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
export default EducationDetails