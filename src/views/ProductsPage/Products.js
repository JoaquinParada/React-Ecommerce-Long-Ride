import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footer/Footer";
import "./products.css";

function Products() {
  return (
    <section className="products-section">
      <div className="container-category">
        <CategoryCard products="hoddies" />
        <CategoryCard products="surfboards" />
        <CategoryCard products="t-shirt" />
        <CategoryCard products="longboard" />
      </div>
      <Footer />
    </section>
  );
}

export default Products;
