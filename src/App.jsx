import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import { Layout } from "@/layout";
import Cart from "./pages/cart/Cart";
import Favourites from "./pages/favourites/Favourites";
import ProductDetails from "./pages/product-details/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
