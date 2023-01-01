import "./categoryCard.css";
import { Link } from "react-router-dom";

function CategoryCard({ products }) {
  return (
    <div className={`product-category cat-${products}`}>
      <div className="products-category-card">
        <Link to={`/products/${products}`}>{products}</Link>
      </div>
    </div>
  );
}

export default CategoryCard;
