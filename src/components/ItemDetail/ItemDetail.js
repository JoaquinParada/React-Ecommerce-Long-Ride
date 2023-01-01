import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Modal from "../Modal/Modal";
import cartIcono from "../../assets/iconos/cart.png";

function ItemDeatail({ id, description, title, imageId, price, stock }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const [modalActive, setModalActive] = useState(false);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = {
      id,
      title,
      price,
      quantity,
      imageId,
      description,
    };

    setModalActive(true);
    setTimeout(() => setModalActive(false), 2000);
    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <div className={`item-detail`}>
      <img src={`/${imageId}`} alt="" />
      <div className="item-info">
        <h2>{title}</h2>
        <p className="detail-desc">{description}</p>
        <p className="detail-price">$ {price}</p>
        {quantityToAdd === 0 ? (
          <ItemCount
            onAdd={handleOnAdd}
            stock={stock}
            initial={productQuantity}
          />
        ) : (
          <Link className="link-finalizo" to="/carrito">
            Finalizar compra
            <img src={cartIcono} id="cart" alt="" />
          </Link>
        )}
        {modalActive ? <Modal></Modal> : <></>}
      </div>
    </div>
  );
}

export default ItemDeatail;
