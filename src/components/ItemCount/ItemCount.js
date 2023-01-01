import { useState } from "react";
import "./itemCount.css";

function ItemCount({ stock = 0, initial = 1, onAdd, price }) {
  const [count, setCount] = useState(initial);

  const add = () => {
    count >= stock ? alert("no hay sufi stock") : setCount(count + 1);
  };

  const remove = () => {
    count > 1 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div className="ItemCount">
      <div className="ItemCount__contenido">
        <button
          className="btn-count"
          onClick={() => {
            add();
          }}
        >
          +
        </button>
        <h3 className="cantidad">{count}</h3>
        <button
          className="btn-count"
          onClick={() => {
            remove();
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          onAdd(count);
          setCount(initial);
        }}
        className="btn-agregar"
      >
        Agregar al carrito {price}
      </button>
    </div>
  );
}

export default ItemCount;
