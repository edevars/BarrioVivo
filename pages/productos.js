import React, { useEffect } from "react";
import Layout from "../src/Components/Layout";
import Loading from "../src/Components/General/Loading";
import ProductsContainer from "../src/Containers/Products";
import AddModal from "../src/Components/Modal/AddModal";
import EditModal from "../src/Components/Modal/EditModal";

//Redux
import { connect } from "react-redux";
import * as productsActions from "../src/redux/actions/productsActions";

const ProductsPage = props => {
  const { productsState, getAllProducts, modalStates } = props;
  const { products, loading, error } = productsState;
  const { addModal, editModal } = modalStates;

  useEffect(() => {
    if (!products.length) {
      getAllProducts();
    }
  }, [products]);

  return (
    <Layout>
      {addModal && <AddModal />}
      {editModal && <EditModal />}
      {loading ? <Loading /> : <ProductsContainer products={products} />}
    </Layout>
  );
};

const mapStateToProps = reducers => {
  const {
    productsReducer: productsState,
    modalReducer: modalStates
  } = reducers;
  return { productsState, modalStates };
};

export default connect(mapStateToProps, productsActions)(ProductsPage);
