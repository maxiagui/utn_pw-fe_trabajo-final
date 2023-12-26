import { useNavigate } from "react-router-dom"


function Volver({textBtn, styleBtn}){
    // usar el hook como una constante
    const navigate = useNavigate();
 return (
    <>
    <button class={styleBtn} onClick={(()=> navigate(-1))} > {textBtn}</button>
    </>

 )   
}
export default Volver;