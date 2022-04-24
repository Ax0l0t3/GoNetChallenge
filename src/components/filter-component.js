import React, {useState} from 'react';
import '../stylesheets/filter-component.css';
import Button from 'react-bootstrap/Button';

function Filter({query, setQuery}){
  
  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  return(
    <div className='filter-container'>
        <input type='text' placeholder='Type to filter...' value={query} onChange={onChange}/>
      <Button variant="secondary" >View Favourites</Button>
    </div>
  );
}

export default Filter;