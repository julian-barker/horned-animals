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
      <Form className='row m-5' >
        <div className='col' >
          <Form.Select 
            aria-label="Filter"
            onChange={(e) => {
              this.props.filterBy(e.target.value);
            }} 
          >
            <option>-- # of Horns --</option>
            <option value='all' >All</option>
            { this.props.horns.map( v => this.renderOption(v) ) }
          </Form.Select>       
        </div>
        <div className='col' >
          <Form.Select 
            aria-label="Sort"
            onChange={(e) => {
              this.props.sortBy(e.target.value);
            }}
          >
            <option>-- Sort by... --</option>
            <option value="default">Default</option>
            <option value="title">Name</option>
            <option value="horns">Number of Horns</option>
            <option value="likes">Popularity</option>
          </Form.Select>       
        </div>
        <div className='col' />
        <div className='col' >
          <Form.Control 
            type='text'
            placeholder='search by title or keyword'
            onChange={(e) => {
              this.props.fuzzySearch(e.target.value);
            }} 
          ></Form.Control>
        </div>
      </Form>
    );
  }
}

export default SearchFilter;