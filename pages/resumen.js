import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";
import Loading from "../src/Components/General/Loading";

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

  return <Layout>{loading ? <Loading /> : <h1>Resumen</h1>}</Layout>;
};

const mapStateToProps = reducers => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(DashboardPage);
