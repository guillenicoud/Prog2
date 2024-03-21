import './App.css';
import Boton from './componentes/Boton'
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.jpg'


function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () =>{
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='Clic'
          esBotondeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotondeClick={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
