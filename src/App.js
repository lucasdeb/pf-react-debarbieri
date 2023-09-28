import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';
import EjemploEvents from './components/Events/EjemploEvents';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={"No Nova, No Party 🍾"} />
      <EjemploEvents />
    </div>
  );
}
export default App;