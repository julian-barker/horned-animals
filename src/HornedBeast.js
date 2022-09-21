import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  
  handleClick = () => {
    this.props.click(this.props.beast._id);
  }

  render() {
    const likes = this.props.beast.likes;
    const compact = `💛 ${new Intl.NumberFormat('en-US', {notation: 'compact', maximumSignificantDigits: 3}).format(likes)}`;
    const likesDisplay = likes === 0 ? '💔' : likes < 10 ? '💛'.repeat(likes) : compact;
    return(
      <Card style={{ width: '18rem' }} >
        <Card.Img 
          variant="top" 
          src={this.props.beast.image_url} 
          alt={this.props.beast.title} 
          onClick={() => {
            this.props.modalClick(true, this.props.beast);
        }} />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>
          <Card.Text>{likesDisplay}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeast;