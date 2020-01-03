import PropTypes from "prop-types";
import Table from "../Table";
import { withTheme } from "styled-components";
import Search from "../General/Search";
import Categories from "../../Containers/Categories";


const ProductsContent = ({ theme, products, search }) => {
  return (
    <>
      <h1>Productos</h1>
      <Search search={search} />
      <Categories />
      <Table
        products={products}
        fullWidth
        backgroundHead={theme.bulma.info}
        foregroundHead={theme.bulma.white}
      />
    </>
  );
};

ProductsContent.propTypes = {
  products: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired
};

export default withTheme(ProductsContent);
