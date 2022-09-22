import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast';
import data from './assets/data.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalShow: false, selected: data[0]}
  }

  setModalShow = bool => {
    this.setState({modalShow: bool});
  };

  setModalSelected = beast => {
    this.setState({selected: beast})
  }

  modalClick = (bool, beast) => {
    this.setModalShow(bool);
    this.setModalSelected(beast);
  }

  render() {

    return (
      <div className="App container-fluid d-flex flex-column gap-6 bg-dark">
        <Header />
        <SelectedBeast
          title={this.state.selected.title}
          src={this.state.selected.image_url}
          keyword={this.state.selected.keyword}
          description={this.state.selected.description}
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
        <Main beasts={data} modalClick={this.modalClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
