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

  return (
    <SettingsTable
      items={categories}
      onClickEdit={id => {
        console.log(`Se hace click para editar la categoria: ${id}`);
      }}
      onClickDelete={id => {
        console.log(`Se hace click para eliminar la categoria: ${id}`);
      }}
    />
  );
};

const mapStateToProps = reducers => reducers.categoriesReducer;

export default connect(mapStateToProps, CategoriesActions)(CategoriesTable);
