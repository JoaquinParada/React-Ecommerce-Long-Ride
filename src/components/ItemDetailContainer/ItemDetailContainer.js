import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../data/fireBase";
import Footer from "../Footer/Footer";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "items", productId))
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <>
      <div className="item-detail-container">
        {loading ? <Loader /> : <ItemDetail {...product} />}
      </div>
      <Footer />
    </>
  );
}

export default ItemDetailContainer;
