import { useState } from "react";
import ProductsContent from "../../Components/Layout/ProductsContent";

const ProductsContainer = ({ products }) => {
  const [searchedProducts, setSearchedProducts] = useState(products);

  const search = name => {
    if (!/^ *$/.test(name)) {
      //verifica que no tenga espacios o este vacia
      name = name.toLowerCase();
      let newProducts = products.filter(product =>
        product.name.toLowerCase().includes(name)
      );
      setSearchedProducts(newProducts);
    } else {
      setSearchedProducts(products);
    }
  };

  const filterByCategory = categoryName => {
    if (categoryName === "Todos") {
      setSearchedProducts(products);
    } else {
      let newProducts = products.filter(
        product => product.category === categoryName
      );
      setSearchedProducts(newProducts);
    }
  };

  return (
    <>
      <ProductsContent
        products={searchedProducts}
        search={search}
        filterByCategory={filterByCategory}
      />
    </>
  );
};

export default ProductsContainer;
