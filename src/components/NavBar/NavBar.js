import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Barsovia</h3>
            <div>
                <button className="btn btn-primary">Hamburguesas</button>
                <button className="btn btn-primary">Bebidas</button>
                <button className="btn btn-primary">Guarnicion</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar