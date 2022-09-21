import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  
  handleClick = () => {
    this.props.click(this.props.id);
  }

  render() {
    const compact = `💛s: ${new Intl.NumberFormat({notation: 'compact'}).format(this.props.likes)}`;
    console.log(compact);
    const likes = this.props.likes === 0 ? 'No 💛s' : this.props.likes < 20 ? '💛'.repeat(this.props.likes) : compact;
    return(
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={this.props.src} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          {/* <Card.Text>❤'s: {'💛'.repeat(this.props.likes)}</Card.Text> */}
          <Card.Text>{likes}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;