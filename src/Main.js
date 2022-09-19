import React from "react";

class HornedBeast extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }
} 


class Main extends React.Component {
  render() {
    return (
      <main>
        {
          this.props.beasts.map( el => {
            return (
              <HornedBeast 
                src={el.image_url}
                title={el.title}
                description={el.description}
                key={el.keyword}
              />
            )
          })
        }
      </main>
    );
  }
}

export default Main;
