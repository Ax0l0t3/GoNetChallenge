import React from 'react';
import '../stylesheets/list-component.css';
import Button from 'react-bootstrap/Button';

function List({addFavourites, removeFavourites, shows, setModalShow, setMovieSelected}){
  return(
    <div className='list-container' >
      { !shows ? 'Cargando...' : shows.map(( show, index) => {
          return(
            <div key={index} className='show-container' >
              <img src={show.image.medium} />
              <Button variant="danger" onClick={() => {
                setModalShow(true);
                setMovieSelected(show);
              }
                }>{show.name}</Button>
                {addFavourites ? <Button variant="primary" className='add' disabled={!addFavourites} onClick={() => addFavourites(show)}>Add</Button> :'' }
                {removeFavourites ? <Button variant="primary" className='add' onClick={() => removeFavourites(show)}>Remove</Button> :'' }
            </div>
          );
        })
      }
    </div>
  );
}

export default List;