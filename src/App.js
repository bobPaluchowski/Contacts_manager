import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';

function App() {
  return (
    <Provider>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className='container'>
        <AddContact />
      <Contacts /> 
      </div>
    </div>
    </Provider>
 );
}

export default App;
