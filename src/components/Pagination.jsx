import React from 'react'


function Pagination({prev, next, act, movenextpage, movebackpage, movefirst, movelast}){

    const handleMoveBack = () => {
        movebackpage()
    }
    const handleMoveNext = () => {
        movenextpage()
    }
    const handleMoveFirst = () => {
        movefirst()
    }
    const handleMoveLast = () => {
        movelast()
    }

    return(
        <div>
            <nav >
                <div class="container-button">
                    {/* Si la pagina activa es 1, anula la primera */}
                    {act!==1 ? (<button class="stlye-button" onClick={handleMoveFirst}>Primera</button>): <button disabled>Primera</button>}
                    {prev ? (<button class="stlye-button" onClick={handleMoveBack}>Previa</button>): <button disabled>Previa</button>}
                    {next ? (<button class="stlye-button" onClick={handleMoveNext}>Siguiente</button>):<button disabled>Siguiente</button>}
                    {next ? (<button class="stlye-button" onClick={handleMoveLast}>Última</button>): <button disabled>Última</button>}
                </div>
            </nav>
        </div>

    )
}
export default Pagination