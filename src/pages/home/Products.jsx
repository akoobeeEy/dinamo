import ProductCard from "@/components/card/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");

      setProducts(products.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
