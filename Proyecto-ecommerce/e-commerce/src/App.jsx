import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'

function App() {
  return (
    <div> 
      <BrowserRouter>
      <header>
        <NavBar></NavBar>
        </header>

          <Routes>

            <Route path='/' element={<ItemListContainer />} ></Route>
            <Route path='/category/:products' element={<ItemListContainer/>}></Route>
            <Route path='/products/:id'element={<ItemDetailContainer/>} ></Route>
            <Route path='*' element={<h1>No se encontro esta pagina, intente volver a la pagina inicial</h1>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>

          </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App


