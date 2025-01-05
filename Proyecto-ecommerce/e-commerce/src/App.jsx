import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {Link, NavLink} from 'react-router'
import NavBar from './components/NavBar'

function App() {


  return (
    <div>
      <BrowserRouter>
      <header>
        <NavBar>
         
        </NavBar>

        </header>

          <Routes>

            <Route path='/' element={<ItemListContainer />} ></Route>
            <Route path='/categories/:id/products' element={<ItemListContainer/>}></Route>
            <Route path='/products/:id'element={<ItemDetailContainer/>} ></Route>
            <Route path='*' element={<h1>No se encontro esta pagina, intente volver a la pagina inicial</h1>}></Route>

          </Routes>

        

      </BrowserRouter>
    </div>

  )
}

export default App


