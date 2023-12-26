import { useState, useEffect } from 'react'
import Characters from './Characters';
import Pagination from './Pagination';
import NavBar from './NavBar';

function Allitems() {
//const simpCharacters
const [simpCharacters, setSimpCharacters] = useState([]);
//Estado donde guardamos proxima y anterior pagina
const [pagNxt, setPagNxt] = useState(" ")
const [pagBck, setPagBck] =useState(" ")
const [pagLst, setPagLst] =useState(" ")
const [pagAct, setPagAct] =useState(" ")

//Enlace a Api
const urlIni = "https://apisimpsons.fly.dev/api/personajes?limit=12";

//fetch a personajes
function fetchCaracters(url){
  //llamado GET a API
  fetch(url)
  .then(recep => recep.json())
  .then(dataSimp => {
    setSimpCharacters(dataSimp.docs);
    setPagNxt((dataSimp.nextPage ? urlIni + "&page=" + dataSimp.nextPage : null));
    setPagBck((dataSimp.prevPage ? urlIni + "&page=" + dataSimp.prevPage : null));
    setPagLst(urlIni + "&page=" + dataSimp.totalPages);
    setPagAct(dataSimp.page);
  })
  .catch(errorCap => console.log(errorCap) );
}
//aplicar useEffects para cortar la iteracion
useEffect(()=>{
  fetchCaracters(urlIni);
}, []);

//funciones de paginado
const pageBack = () =>{
  fetchCaracters(pagBck);
};
const pageNext = () =>{
  fetchCaracters(pagNxt);
};
const pageFisrt = () =>{
  fetchCaracters(urlIni + "page=1");
};
const pageLast = () =>{
  fetchCaracters(pagLst);
};

  return (
    <>
    {
      <div>
      <NavBar/>
      <Characters characters={simpCharacters}/>
      <Pagination prev={pagBck} next={pagNxt} act={pagAct} movenextpage={pageNext} movebackpage={pageBack} movefirst={pageFisrt} movelast={pageLast}/>
      </div>
    }
    </>
  )
}

export default Allitems
