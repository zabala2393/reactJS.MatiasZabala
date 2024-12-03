
function ButtonNav({ label, handleClick }) {

    return (

        <button        
            style={{ backgroundColor: 'lightgreen'}}
            onClick={handleClick}
        >
            {label}

        </button>
    )
}

export default ButtonNav