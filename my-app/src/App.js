import React from 'react';
import Header from './components/Header/Header'
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import "./App.css"

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
    </BrowserRouter>
  );
}
