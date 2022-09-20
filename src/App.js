import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './assets/data.json';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main beasts={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
