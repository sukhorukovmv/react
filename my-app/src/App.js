import React from 'react';
import Header from './components/Header/Header'
import Registration from './components/Header/Registration'
import Access from './components/Header/Access'
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css"
import Merchandises from './components/Merchandise/Merchandise';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Merchandises />
        <Route path='/registration' component={Registration} />
        <Route path='/access' component={Access} />

      </div>
    </BrowserRouter>
  );
}
