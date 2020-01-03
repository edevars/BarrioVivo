import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";
import Loading from "../src/Components/General/Loading";
import ProductsContainer from "../src/Containers/Products";

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
      {loading ? <Loading /> : <ProductsContainer products={products} />}
    </Layout>
  );
};

const mapStateToProps = reducers => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(ProductsPage);
