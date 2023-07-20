import cart from './assets/cart.svg'


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart_widget'/>
            0
            
        </div>
    )
}

const misvgcolor = document.getElementById('mi-svgcolor');
    const paths = misvgcolor.querySelectorAll('path');

    paths.forEach(path => {
      path.setAttribute('fill', 'red');
    });
export default CartWidget