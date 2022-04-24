import React from 'react';
import '../stylesheets/filter-component.css';
import Button from 'react-bootstrap/Button';

function Filter({query, setQuery, setViewFavourites, viewFavourites}){
  
  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  return(
    <div className='filter-container'>
        <input type='text' placeholder='Type to filter...' value={query} onChange={onChange}/>
      <Button variant="secondary" onClick={() => {
        setViewFavourites(true);
        console.log(viewFavourites);
        }}>View Favourites</Button>
    </div>
  );
}

export default Filter;