import React from 'react';
import Form from 'react-bootstrap/Form';


class SearchFilter extends React.Component {
  
  renderOption = value => {
    const v = value.toString();
    return (
      <option key={v} value={v}>
        {value}
      </option>
    )
  }

  render() {
    
    return (
      <Form onSubmit={() => {

      }}>
        <Form.Control type='text' onChange={(e) => {
          this.props.fuzzySearch(e.target.value);
        }} ></Form.Control>
        <Form.Select aria-label="Filter" onChange={(e) => {
          this.props.filterBy(e.target.value);
        }} >
          <option>-- # of Horns --</option>
          <option value='all' >All</option>
          { this.props.horns.map( v => this.renderOption(v) ) }
        </Form.Select>       
        <Form.Select aria-label="Sort" onChange={(e) => {
          this.props.sortBy(e.target.value);
        }}>
          <option>-- Sort by... --</option>
          <option value="default">Default</option>
          <option value="title">Name</option>
          <option value="horns">Number of Horns</option>
          <option value="likes">Popularity</option>
        </Form.Select>       
      </Form>
    );
  }
}

export default SearchFilter;