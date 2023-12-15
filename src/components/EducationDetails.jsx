import PropTypes from 'prop-types';
import '../styles/DisplaySide.css';

function EducationDetails(props){
    /*
    const degrees=[];
    const degree2 ={
        degreeId:2,
        school:"University Of Thessaly",
        degreeTitle:"Electrical and Computer Engineer",
        startDate:"2016",
        endDate:"2021",
        location:"Volos, Gr"
    }

    degrees.push(props.degree);
    degrees.push(degree2);
    */
   
    return(<>
        <div className='educationDisplay'>
        {props.degrees.length >= 1 ? (
            <div>
            <h2 className='educationDisplayTitle'> Education </h2>
            {props.degrees.map((current)=>{
                return (
                    <div key={current.id} className='educationInfo'>
                        <div className='infoDate'>
                            {current.degree.startDate}
                            {current.degree.startDate && current.degree.endDate ? " - " : " "}
                            {current.degree.endDate}
                        </div>
                        <div className='infoTitle'> {current.degree.school}</div>
                        <div className='infoLocation'>{current.degree.location}</div>
                        <div className='infoDescription'>{current.degree.degreeTitle}</div>
                    </div>
                );
            })}
                
            </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
            
        </div>
    </>)
}
EducationDetails.propTypes = {
    degrees:PropTypes.array,
    //degree: PropTypes.object.isRequired,
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
