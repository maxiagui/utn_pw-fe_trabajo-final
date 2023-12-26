import { NavLink } from "react-router-dom";
// import "../general.css"

function NavBar() {
    return (
    <div class="dv-center-navbar">
        <nav class="navbar-container">           
            <NavLink to="/" className={("link", ({isActive, isPending})=> isPending ? "navlinkPending": isActive ? "navlinkActive" :"")}>Home</NavLink>
            <NavLink to={"/allitems"} className={("link", ({isActive, isPending})=> isPending ? "navlinkPending": isActive ? "navlinkActive" :"")}>Personajes</NavLink>
            <NavLink to={"/search"} className={("link", ({isActive, isPending})=> isPending ? "navlinkPending": isActive ? "navlinkActive" :"")}>Buscar</NavLink>
        </nav>
    </div>
    
);
}
export default NavBar;