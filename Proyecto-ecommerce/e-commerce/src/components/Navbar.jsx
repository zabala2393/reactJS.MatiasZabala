import ButtonNav from "./ButtonNav"
import CartWidget from "./CartWidget"


function Navbar() {

    return (

        <div>

            <ButtonNav label='Remeras'

                
                handleClick={{}}
            />

            <ButtonNav label='Pantalones'

                
                handleClick={{}}

            />

            <ButtonNav label='Zapatillas'

               
                handleClick={{}}

            />

            <ButtonNav label='Buzos'

                handleClick={{}}

            />

            <CartWidget></CartWidget>

        </div>
    )
}


export default Navbar