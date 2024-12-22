import ButtonNav from "./ButtonNav"
import CartWidget from "./CartWidget"
import {Link, NavLink} from 'react-router'

function Navbar() {

    return (

        <div

            style={{ backgroundColor: 'lightgreen' }}
            className={'navbar-nav me-auto mb-2 lg-0 container-fluid'}>

            <div className={'row'}>


                <div className={'nav-item productos'}>


                    <ButtonNav label='Remeras'


                        handleClick={{}}
                        as={Link}
                        
                    > <Link to='/Remeras'/> </ButtonNav>

                    <ButtonNav label='Pantalones'


                        handleClick={{}}

                    />

                    <ButtonNav label='Zapatillas'


                        handleClick={{}}

                    />

                </div>

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