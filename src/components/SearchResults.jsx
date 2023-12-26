import React from 'react'
import '../css/search.css'

function searchResults({results, searchEmpty}) {

  return (
    <div class="search-result-container">
        {
          (
          (!searchEmpty) ? <h4>Coloque el nombre de un personaje a buscar</h4>: 
          (results.length === 0) ? <h4>No se encontraron resultados.</h4>:
          (results.length === 1)? <h4>Se encontró {results.length} resultado.</h4>:<h4>Se encontraron {results.length} resultados.</h4>
          )
        }
        <div class="result-container">
        {results.map((item, indice)=>(
          <div key={indice}>
            <div class="dv-card-search-result">
              <div class="img-content-search">
                  <img src={item.Imagen} alt="" />
              </div>
              <div class="info-result">
                  <p>Nombre: {item.Nombre}</p>
                  <p>Ocupación: {item.Ocupacion}</p>
                  <p>Bio:</p>
                  <p>{item.Historia}</p> 
              </div>
            </div>
          </div>
        ))}      
        </div>
    </div>
  )
}

export default searchResults