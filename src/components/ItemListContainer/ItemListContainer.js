import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavCategories from "../NavCategories/NavCategories";
import Loader from "../Loader/Loader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../data/fireBase";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = !categoryId
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryId", "==", categoryId));

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <Loader />;

  return (
    <div className="item-page-wrapper">
      <NavCategories />
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
