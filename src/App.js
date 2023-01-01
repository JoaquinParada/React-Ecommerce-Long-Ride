import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Error404 from "./components/Error404/Error404";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";
import About from "./views/About/About";
import Home from "./views/HomePage/Home";
import Products from "./views/ProductsPage/Products";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <CartContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/carrito" element={<Cart />} />
            <Route
              path="/products/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
