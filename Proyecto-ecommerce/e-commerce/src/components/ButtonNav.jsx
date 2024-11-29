
function ButtonNav ({label,bgc,handleClick}) {

    return (

            <button           
            
            style = {{backgroundColor: bgc}}
            onClick ={handleClick}>
            
            
            {label}
            
            
            
            </button>


)



}

export default ButtonNav