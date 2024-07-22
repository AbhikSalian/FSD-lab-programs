import React from "react";
function Button({label}){
   
    function handleClick(label){
        
        alert(`${label} was clicked `);
      }
    return(
        <button onClick={()=>handleClick(label)}>{label}</button>
    );
};
export default Button;