import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';
import SearchBar from 'material-ui-search-bar';
import search from './services/search'
import CardSong from './components/Card/CardSong';
import useMediaQuery from '@mui/material/useMediaQuery';
import SuperCard from './components/SuperCard/SuperCard'
const itemSubMenu = [
  { name: 'recientes', label: 'Recientes'},
  { name: 'artistas', label: 'Artistas'},
  { name: 'albums', label: 'Álbums'},
  { name: 'canciones', label: 'Canciones'},
  { name: 'estaciones', label: 'Estaciones'}
]

const itemSecondSubMenu = [
  { name: 'metal', label: 'Metal'},
  { name: 'paraBailar', label: 'Para Bailar'},
  { name: 'rock90s', label: 'Rock 90s'},
  { name: 'baladas', label: 'Baladas'}
]
const subItemsMenu = [
  itemSubMenu,
  itemSecondSubMenu
]

function App() {
  const [searchBarValue, setSearchBarValue] = React.useState('')
  const [response, setResponse] = useState('')

  const searchSong = async (name) => {
    const response = await search(name);
    setResponse(response)
    console.log(response.data.data)
  }

  useEffect( () => {
    searchSong('eminem')
  },[])

  const matches = useMediaQuery('(min-width:300px)');

  return (
    <div className="App">
      <div className= "test">
      <Sidebar subItems={subItemsMenu}/>
      <div className='results'>
        <div className='navbar-container'>
          <SearchBar 
            value={searchBarValue}
            onChange={(newValue) => setSearchBarValue(newValue)}
            onRequestSearch={() => searchSong(searchBarValue)}/>
        </div>
        <div className='song-container'>
        {response.data && response.data.data.length > 0 && 
        <SuperCard image={response.data.data[0].album.cover_medium}/>
        }
        </div>
        <div className='results-container'>
          {response.data && response.data.data.length > 0 &&
          response.data.data.map((value)=> {
            return(
              <CardSong image={value.album.cover_big}/>
            )
          })}
        </div>
      </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
