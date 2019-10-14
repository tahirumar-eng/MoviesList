import React from 'react'
const Select=({label,options,onChange,value,name,error})=>{
    return(
    <div className="form-group">
           <label htmlFor={name}>{label} </label>
           <select 
           onChange={onChange}
           value={value}
           label={label}
           id={name}
           name={name}
           className="custom-select">  
           <option value="" />
           {options.map(option=>(
               <option key={option._id} value={option._id}>
                   {option.name}
                   
               </option>
           ))}
           </select>
           {error && <div className="alert alert-danger">{error}</div>}

           </div>
    );
}
export default Select;