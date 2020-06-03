import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Product from './components/Product';
import Productlist from './components/Productlist';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Modal from './components/Modal';
import Title from './components/Title';
class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route  exact path="/" component={Productlist}></Route>
          <Route  path="/details" component={Details}></Route>
          <Route  path="/cart" component={Cart}></Route>
          <Route   component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
