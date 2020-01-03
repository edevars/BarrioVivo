import ProductsContent from "../../Components/Layout/ProductsContent";

const ProductsContainer = ({ products }) => {
  let onChangeProducts = products;

  const search = name => {
    name = name.toLowerCase();
    let newProducts = products.filter(product =>
      product.name.toLowerCase().includes(name)
    );
    onChangeProducts = newProducts;
  };
  
  return (
    <>
      <ProductsContent products={onChangeProducts} />
    </>
  );
};

export default ProductsContainer;
