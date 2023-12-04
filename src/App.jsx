//Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Estilos
//import './App.css';
//Importación de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <NavBar />
        <ItemListContainer greeting="Bienvenido/a! Te invito a conocer sobre el arte de blendear."/>

      </div>
    );
      
}

export default App;
