import React from "react";
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <main className="container-fluid" >
        <div className="row row-cols-auto justify-content-between g-4" >
          {
            this.props.beasts.map( el => {
              return (
                <HornedBeast 
                  src={el.image_url}
                  title={el.title}
                  description={el.description}
                  key={el._id}
                  className="col-4"
                />
              )
            })
          }
        </div>
      </main>
    );
  }
}

export default Main;
