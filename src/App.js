import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
