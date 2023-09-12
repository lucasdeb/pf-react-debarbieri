import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';

const App = () => {
  return ( 
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={"No Nova, No Party 🍾"} />
    </div>
  );
}
export default App;