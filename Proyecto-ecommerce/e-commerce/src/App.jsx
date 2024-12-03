import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (

    <div>

      <header>

        <Navbar></Navbar>

      </header>

      <ItemListContainer></ItemListContainer>

    </div>

  )
}

export default App


