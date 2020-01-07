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
  const { productsState, getAllProducts, modalStates, categoriesState } = props;
  const { products, loading, error } = productsState;
  const { addModal, editModal } = modalStates;
  const { loading: categoriesLoading } = categoriesState;

  useEffect(() => {
    if (!products.length) {
      getAllProducts();
    }
  }, [products]);

  const isLoading = loading || categoriesLoading;

  return (
    <>
      {addModal && <AddModal />}
      {editModal && <EditModal />}
      <Layout>
        {isLoading ? <Loading /> : <ProductsContainer products={products} />}
      </Layout>
    </>
  );
};

const mapStateToProps = reducers => {
  const {
    productsReducer: productsState,
    categoriesReducer: categoriesState,
    modalReducer: modalStates
  } = reducers;
  return { productsState, modalStates, categoriesState };
};

export default connect(mapStateToProps, productsActions)(ProductsPage);
