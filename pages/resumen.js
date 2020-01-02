import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";

//Redux
import { connect } from "react-redux";
import * as productsActions from "../src/redux/actions/productsActions";

const DashboardPage = props => {
  const { products, getAllProducts, loading, error } = props;

  useEffect(() => {
    if (!products.length) {
      getAllProducts();
    }
  }, [products]);

  return (
    <Layout>{loading ? <h1>Se esta cargando</h1> : <h1>Resumen</h1>}</Layout>
  );
};

const mapStateToProps = reducers => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(DashboardPage);
