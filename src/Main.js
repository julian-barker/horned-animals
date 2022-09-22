import React from "react";
import HornedBeast from './HornedBeast.js';
import SearchFilter from "./SearchFilter.js";


class Main extends React.Component {
  constructor(props) {
    super(props);
    const temp = this.props.beasts.slice();
    temp.forEach(beast => beast.likes = 0);
    this.state = {
      beasts: temp,
      sort: 'id',
      hornFilter: 'all',
      searchVal: /.*/
    };
  }

  favorite = (id) => {
    const temp = this.state.beasts.slice();
    const i = temp.findIndex(el => id === el._id);
    temp[i].likes += 1;
    console.log(`liked: #${id} (${temp[i].title})`)
    this.setState({ beasts: temp });
  }

  sortByHorns = () => {
    console.log(`called sortByHorns()`);
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => b.horns - a.horns);
    this.setState({ beasts: temp, sort: 'horns' });
  }

  sortByLikes = () => {
    console.log(`called sortByLikes()`);
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => b.likes - a.likes);
    this.setState({ beasts: temp, sort: 'likes' });
  }

  sortByTitle = () => {
    console.log(`called sortByTitle()`);
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => a.title.localeCompare(b.title));
    this.setState({ beasts: temp, sort: 'title' });
  }
  
  sortById = () => {
    console.log(`called sortBy()`);
    const temp = this.state.beasts.slice();
    temp.sort((a,b) => a._id - b._id);
    this.setState({ beasts: temp, sort: 'id' });
  }

  sortBy = type => {
    console.log(`called sortBy(${type})`);
    switch (type) {
      case 'horns':
        this.sortByHorns();
        break;
      case 'likes':
        this.sortByLikes();
        break;
      case 'title':
        this.sortByTitle();
        break;
      default: 
        this.sortById();
    }
  }

  filterBy = v => {
    console.log(`called filterBy(${v})`);
    this.setState({ hornFilter: v });
  }

  fuzzySearch = v => {
    console.log(`called fuzzySearch(${v})`);
    const re = v === '' ? /.*/ : new RegExp(`${v.split('').map(c => c + '+').join('')}`, 'i');
    console.log(re);
    this.setState({ searchVal: re });
  }

  renderBeast(beast) {
    return (
      <HornedBeast 
        key={beast._id}
        beast={beast}
        click={(id) => this.favorite(id)}
        modalClick={this.props.modalClick}
        className="col-4"
      />
    )
  }

  renderBeasts = () => {
    console.log('rendering beasts...');
    const hornFilter = this.state.hornFilter;
    const re = this.state.searchVal;
    console.log(re);
    const temp = (hornFilter === 'all' ? this.state.beasts : this.state.beasts.filter(beast => beast.horns.toString() === hornFilter))
      .filter(beast => beast.title.match(re) || beast.keyword.match(re));
    return (
      <div className="row row-cols-auto justify-content-evenly g-4" >
        { temp.map( beast => this.renderBeast(beast) ) }
      </div>
    );
  }

  render() {
    const set = [...new Set(this.state.beasts.map(beast => beast.horns))];
    return (
      <main className="container bg-secondary font-monospace rounded" >
        {/* <Button variant="primary" onClick={this.sortByHorns}>Sort by Number of Horns</Button>
        <Button variant="primary" onClick={this.sortByLikes}>Sort by Popularity</Button>
        <Button variant="primary" onClick={this.sortByTitle}>Sort Alphabetically</Button>
        <Button variant="primary" onClick={this.sortById}>Reset to Default</Button> */}
        <SearchFilter sortBy={this.sortBy} filterBy={this.filterBy} fuzzySearch={this.fuzzySearch} horns={set} />
        {this.renderBeasts()}
      </main>
    );
  }
}

export default Main;
