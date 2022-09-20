import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ likes: state.likes + 1 }));
  }

  render() {
    return(
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={this.props.src} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>❤'s: {'💛'.repeat(this.state.likes)}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;