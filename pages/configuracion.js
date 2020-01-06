import { Component } from "react";
import Layout from "../src/Components/Layout";
import SettingsContent from "../src/Components/Layout/SettingsContent";
import Loading from "../src/Components/General/Loading";
import { connect } from "react-redux";

class SettingsPage extends Component {
  render() {
    const {
      categoriesReducer,
      usersReducer
    } = this.props;

    const { loading: loadingUsers, users } = usersReducer;
    const { loading: loadingCategories, categories } = categoriesReducer;

    const isLoading = loadingUsers || loadingCategories;
    return (
      <Layout>
        <h1>Configuracion</h1>
        {isLoading ? <Loading /> : <SettingsContent />}
      </Layout>
    );
  }
}

const mapStateToProps = ({ categoriesReducer, usersReducer }) => {
  const reduxStates = { categoriesReducer, usersReducer };
  return reduxStates;
};

export default connect(mapStateToProps, {})(SettingsPage);
