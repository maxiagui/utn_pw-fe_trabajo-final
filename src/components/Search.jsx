import React from 'react'
import NavBar from './NavBar'
import SearchResults from './searchResults'
import { useState, useEffect } from 'react'
import '../css/search.css'

//Esta api hace una busqueda por medio de una url + el texto que incluyas
const urlSearch = "https://apisimpsons.fly.dev/api/personajes/find/";

function Search() {

  const [simpSearch, setSimpSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchIsEmpty, setSearchIsEmpty]=useState(false);
 
  function searchCharacters(url){
    //llamado GET a API
    fetch(url)
    .then(recep => recep.json())
    .then(searchSimp => {
      setSimpSearch(searchSimp.result);
    })
    .catch(errorCap => console.log(errorCap) );
  }
  //aplicar useEffects para cortar la iteracion
  useEffect(()=>{
    searchCharacters(urlSearch);
  }, []);


  const handleSearchTarget = (event) => {
      const searchTarget = event.target.value;
      setInputValue(searchTarget);
      (!searchTarget) ? setSearchIsEmpty(true):
      //Con el texto caputado del imput hacemos la busqueda por la url
      searchCharacters(urlSearch + searchTarget);
  }

  return (
    <div>
        <NavBar/>
        <div class="dv-search-box">
          <label>Buscar: </label>
          <input type="text" id="text-search-input"
           value={inputValue} onChange={handleSearchTarget}
          //  placeholder="bart"
           />
        </div>
        <SearchResults results={simpSearch} searchEmpty={searchIsEmpty}/>

    </div>
  )
}

export default Search