import React from 'react'
import NavBar from './NavBar.jsx';
import '../css/home.css'

function Home() {
  return (
    <div>
        <NavBar/>
        <div class="dv-main-home">
            <div class="container-img-bg">
            <img src="https://assets.stickpng.com/images/5eb95b6a17f3c600044a2905.png" alt="" />
            </div>
            <div class="text-box-dv-home">
              <p>Explora el fascinante universo de Los Simpsons, la icónica familia amarilla que ha conquistado corazones en todo el mundo. Sumérgete en la vida de Homer, Marge, Bart, Lisa y Maggie, mientras navegas por una colección única. Descubre perfiles detallados de personajes, momentos inolvidables, y curiosidades exclusivas que hacen que Los Simpsons sean una joya cultural. Desde risas incontrolables hasta lecciones de vida, acompáñanos en este viaje lleno de humor y sátira. ¡Prepárate para reír, reflexionar y enamorarte de nuevo de la familia más amada de la televisión!</p>
            </div>
        </div>
    </div>
  )
}

export default Home