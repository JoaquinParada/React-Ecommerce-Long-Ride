import "./modal.css";
import ok from "../../assets/iconos/ok-icono.png";
function Modal() {
  return (
    <div className="modal">
      <img src={ok} alt="" id="ok" />
      <h3>Product added to cart</h3>
    </div>
  );
}

export default Modal;
