import PropTypes from "prop-types";
import Table from "../Table";
import { withTheme } from "styled-components";

const ProductsContent = ({ theme, products }) => {
  return (
    <>
      <h1>Productos</h1>
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
  theme: PropTypes.object.isRequired
};

export default withTheme(ProductsContent);
