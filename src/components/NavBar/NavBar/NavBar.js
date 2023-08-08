import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav  id="navbar" >
           
           <Link className="home" to="/">
                 <b>Home</b>
            </Link>
            <NavLink to={`/category/hamburguesas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>Hamburguesas</h4></NavLink>
            <NavLink to={`/category/bebidas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> <h4>Bebidas</h4></NavLink>
            <NavLink to={`/category/guarnicion`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> Guarnicion</h4></NavLink>
            

            <CartWidget/>

        </nav >
    )

}

export default NavBar;