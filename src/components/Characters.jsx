import React from 'react'
import '../css/allitems.css'

function Characters({characters}) {
    //En este componente muestra lo que viene trayendo de results de Characters. Hace el mapeo del Vector 
    //que mandó. Acá lo recibo por prompt (parametro) como characters y con todos los datos que necesitamos lo 
    //volcamos al html con codigo javascript (REACT)
        return(
            <div class="container-image">
                {characters.map((item, indice)=>(
                    <div key={indice}>
                        <div class="container-card" >
                            <div class="img-content">
                                <img src={item.Imagen} alt={item.Nombre}/>
                            </div>
                            <div class="block-info">
                              <div class="block-info-tittle">
                              {((item.Nombre).length>40? <h4>{item.Nombre}</h4>:<h3>{item.Nombre}</h3>)}
                                {/* Esto se colocará en la imagen volando */}
                                {/* <p>Genero: {item.Genero}</p>
                                <p>Ocupacion: {item.Ocupacion}</p> */}
                              </div>  
                            </div>
                        </div>  
                    </div>
                )
                )}
            </div>
        )
    }
    export default Characters