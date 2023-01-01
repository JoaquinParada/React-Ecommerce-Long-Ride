import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./cart.css";

function Cart() {
  const { getCart, getTotal, clear } = useContext(CartContext);

  const products = getCart();
  const total = getTotal();

  return (
    <>
      <h3 className="titulo-cart">CART</h3>
      <div className="cart-item-container">
        {products.length <= 0 ? (
          <div className="cart-items cart-empty">
            <p className="no-products">No hay nada en el carrito</p>
            <Link to="/">
              <button className="btn-cart btn-red">Agregar productos</button>
            </Link>
          </div>
        ) : (
          <div className="si-hayCompra cart-items">
            {products}
            <div className="footer-cart">
              <p className="pTotal">Total: $ {total}</p>
              <div className="div-checkout">
                <Link to="/checkout" className="btn-cart btn-checkout">
                  Terminar compra
                </Link>
                <button className="btn-cart btn-red" onClick={clear}>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
