import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBAr';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
     <AppNavBar/>
     <ShoppingList/>
    </div>
  );
}

export default App;
