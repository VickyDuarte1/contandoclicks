import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logocontador from './imagenes/DALL·E 2022-12-22 20.34.17 - Logo fondo oscuro cartel neon Click.png';
import {useState} from 'react';

function App() {

const [numClicks, setNumClicks ] = useState(0); 

const manejarClick = () => {
  setNumClicks(numClicks +1);
}

const reiniciarContador = () => {
  setNumClicks(0);
}
  return (

    <div className="App">

     <div className='Logo'>
      <img className='logoimg'
      src={logocontador}
      alt='Logodelcontador'/>
     </div>

     <div className='contenedor-de-botones'>
     <Contador numClicks={numClicks}/>
     <Boton 
     texto= 'Click'
     esBotonDeClick={true}
     manejarClick={manejarClick}/>
     <Boton 
     texto='Reiniciar'
     esBotonDeClick={false}
     manejarClick={reiniciarContador}/>
     </div>

    </div>
  );
}

export default App;
