import { useEffect } from "react";
import SettingsTable from "../../Components/SettingsTable";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const CategoriesActions = { getAllCategories };

const CategoriesTable = ({ categories, getAllCategories }) => {
  useEffect(() => {
    if (categories.length === 0) {
      getAllCategories();
    }
  }, []);

  return <SettingsTable items={categories} />;
};

const mapStateToProps = reducers => reducers.categoriesReducer;

export default connect(mapStateToProps, CategoriesActions)(CategoriesTable);
