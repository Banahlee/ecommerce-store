import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Cart from './components/cart-components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Modal from './components/Modal'

function App() {
  return (
    <React.Fragment>
      <Router>
     <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Default}></Route>
      </Switch>
      <Modal/>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
