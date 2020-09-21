import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ProductsComponent from './components/ProductsComponent';
import CartComponent from './components/CartComponent';
import HeaderComponent from './components/HeaderComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent />
        <div className="main">
          <ProductsComponent />
          <CartComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
