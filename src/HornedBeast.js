import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: 0, hearts: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      likes: state.likes + 1,
      // hearts: '&#10084;'.repeat(this.state.likes)
    }));
  }

  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} />
        <p>{this.props.description}</p>
        <p>{'❤'.repeat(this.state.likes)}</p>
        <button onClick={this.handleClick}>Favorite</button>
      </div>
    )
  }
} 

export default HornedBeast;