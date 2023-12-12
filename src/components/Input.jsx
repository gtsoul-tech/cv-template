function Input( { label,value,handleChange,placeholder }){
    return(
        <>
        <label>
        {label}
        {' '}
        <input
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
        </label>
        </>
    )
}

export default Input