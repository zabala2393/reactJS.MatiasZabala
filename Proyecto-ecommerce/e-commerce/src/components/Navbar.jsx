import ButtonNav from "./ButtonNav"
import CartWidget from "./CartWidget"

function Navbar() {

    return (

        <div

            style={{ backgroundColor: 'lightgreen' }}
            className={'navbar-nav me-auto mb-2 lg-0 container-fluid'}>

            <div className={'row'}>


                <ul className={'nav-item productos'}>


                    <ButtonNav label='Remeras'


                        handleClick={{}}
                    />

                    <ButtonNav label='Pantalones'


                        handleClick={{}}

                    />

                    <ButtonNav label='Zapatillas'


                        handleClick={{}}

                    />

                </ul>

                <div className={'nav-item logo'}>

                    <h1>Tienda de ropa</h1>

                </div>                


                <div className={'nav-item carrito'}>

                    <CartWidget></CartWidget>

                </div>


            </div>

        </div>
    )
}


export default Navbar