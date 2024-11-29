import './App.css'
import ButtonNav from './components/ButtonNav'

function App() {


  return (

    <div>

      <ButtonNav label='Remeras'

        bgc='darkred'
        handleClick={{}}
      />

      <ButtonNav label='Pantalones'

       bgc = 'darkblue'
       handleClick={{}}

      />

      <ButtonNav label = 'Zapatillas'

      bgc = 'darkgreen'
      handleClick={{}}

      />

      <ButtonNav label = 'Buzos'

      bgc = 'magenta'
      handleClick={{}}

      />



    </div>

  )
}

export default App
