import { useContext } from "react";
import "./shop.scss";
import { ProductsContext } from "../../context/Product.context";
import ProductCard from "../../components/productcard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
