import React, {useEffect, useState} from 'react';
import './App.css';
import Filter from './components/filter-component';
import List from './components/list-component';
import ModalDetails from './components/modal';

function App() {
  const url = 'http://api.tvmaze.com/shows';
  const [query, setQuery] = useState('');
  const [filterList, setFilterList] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [viewFavourites, setViewFavourites] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [shows, setShows] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setShows(responseJson);
    setFilterList(responseJson);
  }

  const addFavourites = (show) => {
    setFavourites([...favourites, show]);
  }

  const removeFavourites = (show) => {
    const accept = window.confirm('Remove?');
    if (accept == true){
      const favs = favourites.filter((element)=> element.name !==show.name )
      setFavourites([...favs])
    }
  }

  useEffect(() => {
    fetchApi()
  }, []);
  
  useEffect(()=>{
    if(query !== ''){
      const listFilter = shows.filter(item => item.name.toLowerCase().includes(query.toLocaleLowerCase()));
      setFilterList(listFilter);
    }else{
      setFilterList(shows);
    }
  }, [query]);

  return (
    <div className="app-container">
      <h1>My TV Shows</h1>
      <Filter query={query} setQuery={setQuery} setViewFavourites={setViewFavourites}/>
      {favourites.length && viewFavourites
        ? <>
          <h2>Favourites</h2>
          <List shows={favourites} removeFavourites={removeFavourites} setModalShow={setModalShow} setMovieSelected={setMovieSelected} viewFavourites={viewFavourites}/>
          <br/><br/>
          <br/><br/>
          </> 
        : ''
      }
      <List shows={filterList} addFavourites={addFavourites} setModalShow={setModalShow} setMovieSelected={setMovieSelected}/>
      <ModalDetails
        show={modalShow}
        favourites={favourites}
        addFavourites={addFavourites}
        removeFavourites={removeFavourites}
        info={movieSelected}
        onHide={() => setModalShow(false)}
        />
    </div>
  );
}

export default App;