import React, {useEffect, useState} from 'react';
import '../stylesheets/list-component.css';
import Button from 'react-bootstrap/Button';


function List(){
  const url = 'http://api.tvmaze.com/shows';
  const [shows, setShows] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setShows(responseJson)
  }
  const [adder, setAdder] = useState(false);
  useEffect(() => {
    fetchApi()
  }, [])
  return(
    <div className='list-container'>
      { !shows ? 'Cargando...' : shows.map(( show, index) => {
          return(
            <div key={index} className='show-container'>
              <img src={show.image.medium} />
              <h3>{show.name}</h3>
              <Button variant="primary" className='add' onClick={() => setAdder(true)}>Add</Button>
            </div>
          );
        })
      }
    </div>
  );
}

export default List;