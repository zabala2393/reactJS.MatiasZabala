
function ButtonNav({ label, handleClick }) {

    return (

        <button

            style={{ backgroundColor: 'limegreen'}}
            onClick={handleClick}
            
            >



            {label}



        </button>

    )
}

export default ButtonNav