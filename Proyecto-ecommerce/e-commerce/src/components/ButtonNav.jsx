
function ButtonNav({ label, handleClick }) {

    return (

        <button        
            style={{ backgroundColor: 'lightgreen'}}
            onClick={handleClick}
            ref={{}}
        >
            {label}

        </button>
    )
}

export default ButtonNav