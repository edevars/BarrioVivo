import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";
import Loading from "../src/Components/General/Loading";
import ProductsContent from "../src/Components/Layout/ProductsContent";

//Redux
import { connect } from "react-redux";
import * as productsActions from "../src/redux/actions/productsActions";

const ProductsPage = props => {
  const { products, getAllProducts, loading, error } = props;

  useEffect(() => {
    if (!products.length) {
      getAllProducts();
    }
  }, [products]);

  return (
    <Layout>
      {loading ? <Loading /> : <ProductsContent products={products} />}
    </Layout>
  );
};

const mapStateToProps = reducers => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(ProductsPage);
