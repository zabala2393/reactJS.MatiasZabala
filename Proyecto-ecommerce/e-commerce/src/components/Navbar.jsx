import ButtonNav from "./ButtonNav"
import CartWidget from "./CartWidget"

function Navbar() {

    return (

        <div

            style={{ backgroundColor: 'lightgreen' }}
            class={'navbar-nav me-auto mb-2 lg-0 container-fluid'}>

            <div class={'row'}>


                <div class={'nav-item productos'}>


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

                </div>

                <div class={'nav-item logo'}>

                    <h1>Tienda de ropa</h1>

                </div>                


                <div class={'nav-item carrito'}>

                    <CartWidget></CartWidget>

                </div>


            </div>

        </div>
    )
}


export default Navbar