import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";
import Loading from "../src/Components/General/Loading";
import ResumenContent from "../src/Components/Layout/ResumenContent";

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
    <Layout>
      {loading ? <Loading /> : <ResumenContent products={products} />}
    </Layout>
  );
};

const mapStateToProps = reducers => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(DashboardPage);
