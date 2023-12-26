import React from 'react'
import {useRouteError} from "react-router-dom"
import Volver from './Volver';



export default function Error() {
    const error = useRouteError();
    console.log(error)
  return (
    <div class="dv-main-home">
    <h3>PÁGINA NO ENCONTRADA</h3>
    <h4>{error.status} {error.statusText}</h4>
    <h5>Error ocurrido: {error.error.message}</h5>
    <div class="button-error-dv"> 
        <Volver textBtn={"Inicio"} styleBtn={'stlye-button'} />
    </div>
    </div>
  );
}

