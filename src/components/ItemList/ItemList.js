// import "./itemList.css";
import ItemCard from "../ItemCard/ItemCard";
import { memo } from "react";

function ItemList({ products }) {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <ItemCard key={product.key} {...product} />
      ))}
    </div>
  );
}

export default memo(ItemList);
