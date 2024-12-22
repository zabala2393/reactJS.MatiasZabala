import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from '.components/ItemDetailContainer'

function App() {


  return (




    <div>


      <BrowserRouter>

      <header>
        <Navbar>
          <Routes>

            <Route path='/' element={<ItemListContainer />} ></Route>
            <Route path='item/:id' element={<ItemListContainer/>}></Route>
            <Route path='category/:id'element={<ItemDetailContainer/>} ></Route>

          </Routes>

        </Navbar>
        </header>

        <ItemListContainer></ItemListContainer>

      </BrowserRouter>
    </div>

  )
}

export default App


