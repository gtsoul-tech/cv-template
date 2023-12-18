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
    function isWhite(str) {
        // fiddle this value to set stricter rules for what is white.
        var whiteLimit = 200, 
            r,g,b;
        
        r = parseInt("0x"+str.substring(1,3));
        g = parseInt("0x"+str.substring(3,5));
        b = parseInt("0x"+str.substring(5,7));
        if(r < whiteLimit || b < whiteLimit || g < whiteLimit) {
            return false;
        } 
        return true;    
    }
    let mystyle = {
        backgroundColor: "#D3D3D3",
        color:props.backgroundColor
    };
    if(isWhite(props.backgroundColor)){
        mystyle.color=props.backgroundColor
        mystyle.backgroundColor= "#000000"
    }else{
        mystyle.backgroundColor= "#D3D3D3"
        mystyle.color=props.backgroundColor
    }
    
    return(
        <div className='sectionDisplay'>
        {props.degrees.length > 1 ? (
            <>
            <h2 className='educationDisplayTitle' style={mystyle}> Education </h2>
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
            </>
            
                ) : (
                    <div>{' '}
                    </div>
                )}
            
        </div>)
}
EducationDetails.propTypes = {
    degrees:PropTypes.array,
    school: PropTypes.string,
    degreeTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate:PropTypes.string,
    location:PropTypes.string,
    backgroundColor:PropTypes.string,
}
export default EducationDetails
