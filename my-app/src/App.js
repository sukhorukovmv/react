import React from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import Registration from './components/Header/Registration'
import Access from './components/Header/Access'
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css"
import Merchandises from './components/Merchandise/Merchandise';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <div class='app-wraper-content'>
          <Route path='/' render={ () => <Merchandises merchandises={props.state.merchandises} /> }/>
          <Route path='/registration' render={Registration} />
          <Route path='/access' render={Access} />
          <Route path='/dialogs' render={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}
