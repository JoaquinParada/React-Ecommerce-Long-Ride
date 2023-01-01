import "./itemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ id, imageId, title, price }) {
  return (
    <div className="item-card">
      <div className="img-div">
        <img className="item-image" src={`/${imageId}`} alt={title} />
        <Link to={`/detail/${id}`} className="btn-item">
          VER MÁS
        </Link>
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{price} $</p>
      </div>
    </div>
  );
}

export default ItemCard;
