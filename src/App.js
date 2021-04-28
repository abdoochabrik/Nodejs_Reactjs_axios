import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBAr';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './Store';
import { Container } from 'reactstrap';
import ItemModal from './components/itemModal';


function App() {

  return (
    <Provider store={store}>
    <div className="App">
     <AppNavBar/>
     <Container>
        <ItemModal/>
        <br/>
        <ShoppingList/>
     </Container>
    </div>
    </Provider>
  );
}

export default App;
