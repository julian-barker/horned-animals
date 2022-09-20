import React from "react";
import HornedBeast from './HornedBeast.js';


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
                key={el._id}
              />
            )
          })
        }
      </main>
    );
  }
}

export default Main;
