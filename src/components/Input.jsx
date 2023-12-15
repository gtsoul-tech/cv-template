import PropTypes from 'prop-types';
import '../styles/EditSide.css'
function Input( { label,value,name,handleChange,placeholder,recommended=false }){
    
    return(
        <>
        <label className="personalLabel">
        {recommended ? (
            <div>
                {label}
                {' '}
                <span className='recommended'>recommended</span>
            </div>
        ) : (
            
            <div>{label}
            {' '}</div>
        )}
        <input
            className='inputPersonal'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
        />
        </label>
        </>
    )
}
Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    handleChange:PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    recommended: PropTypes.bool
}
export default Input
