import { useEffect } from "react";
import Layout from "../src/Components/Layout";
import SettingsContent from "../src/Components/Layout/SettingsContent";
import Loading from "../src/Components/General/Loading";
import { connect } from "react-redux";
import { getAllUsers } from "../src/redux/actions/usersActions";
import { getAllCategories } from "../src/redux/actions/categoriesActions";

const SettingsPage = props => {
  const {
    getAllUsers,
    getAllCategories,
    categoriesReducer,
    usersReducer
  } = props;

  const { loading: loadingUsers, users } = usersReducer;
  const { loading: loadingCategories, categories } = categoriesReducer;

  const isLoading = loadingUsers || loadingCategories;

  useEffect(() => {
    async function fetchData() {
      if (!categories.length) {
        await getAllCategories();
      }

      if (!users.length) {
        await getAllUsers();
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <h1>Configuracion</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <SettingsContent users={users} categories={categories} />
      )}
    </Layout>
  );
};

const mapDispatchToProps = () => {
  let actions = { getAllUsers, getAllCategories };
  return actions;
};

const mapStateToProps = ({ categoriesReducer, usersReducer }) => {
  const reduxStates = { categoriesReducer, usersReducer };
  return reduxStates;
};

export default connect(mapStateToProps, mapDispatchToProps())(SettingsPage);
