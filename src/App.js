import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import ShoppingCart from './component/ShoppingCart';
import ShoppingCartIcons from './component/shoppingCartIcons';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'><Home /></div>
          <div className='col-4'><ShoppingCart /></div>
          <div className='col-4'><ShoppingCartIcons /></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
