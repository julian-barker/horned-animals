import React from "react";
import HornedBeast from './HornedBeast.js';
import Button from 'react-bootstrap/Button';


class Main extends React.Component {
  constructor(props) {
    super(props);
    const temp = this.props.beasts.slice();
    temp.forEach(beast => beast.likes = 0);
    this.state = {beasts: temp};
  }

  favorite = (id) => {
    const temp = this.state.beasts.slice();
    const i = temp.findIndex(el => id === el._id);
    temp[i].likes += 1;
    this.setState({ beasts: temp });
  }

  sortByHorns = () => {
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => b.horns - a.horns);
    this.setState({ beasts: temp });
  }

  sortByLikes = () => {
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => b.likes - a.likes);
    this.setState({ beasts: temp });
  }

  sortByTitle = () => {
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => a.title.localeCompare(b.title));
    this.setState({ beasts: temp });
  }
  
  sortById = () => {
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => a._id - b._id);
    this.setState({ beasts: temp });
  }

  renderBeast(beast) {
    return (
      <HornedBeast 
        key={beast._id}
        id={beast._id}
        src={beast.image_url}
        title={beast.title}
        description={beast.description}
        likes={beast.likes}
        click={(id) => this.favorite(id)}
        className="col-4"
      />
    )
  }

  render() {
    return (
      <main className="container-fluid" >
        <Button variant="primary" onClick={this.sortByHorns}>Sort by Number of Horns</Button>
        <Button variant="primary" onClick={this.sortByLikes}>Sort by Popularity</Button>
        <Button variant="primary" onClick={this.sortByTitle}>Sort Alphabetically</Button>
        <Button variant="primary" onClick={this.sortById}>Reset to Default</Button>
        <div className="row row-cols-auto justify-content-evenly g-4" >
          {
            this.state.beasts.map( beast => this.renderBeast(beast) )
          }
        </div>
      </main>
    );
  }
}

export default Main;
