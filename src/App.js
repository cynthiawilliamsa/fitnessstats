import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>           
        <Footer/>
       
      </div>
    );
  }
}

export default App;
