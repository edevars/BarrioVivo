import styled from "styled-components";
import PropTypes from "prop-types";
import Table from "../Table";
import { withTheme } from "styled-components";

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  column-gap: 70px;
  margin-top: 30px;
  @media screen and (max-width: 1360px){
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  h3 {
    margin: 0;
  }
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${props => props.color || "black"};
  margin-right: 10px;
`;

const ResumenContent = ({ products, theme }) => {
  const replaceProduct = products.filter(
    ({ minStock, inStock }) => inStock <= minStock
  );

  const toBuyProduct = products.filter(
    ({ minStock, inStock }) => inStock - 2 <= minStock && inStock > minStock
  );

  const okProduct = products.filter(
    ({ minStock, inStock }) => inStock > minStock + 2
  );

  return (
    <>
      <h1>Resumen</h1>
      <GridWrapper>
        <GridItem>
          <SubtitleWrapper>
            <Circle color="hsl(348, 100%, 61%) " />
            <h3>Productos que necesitan comprarse</h3>
          </SubtitleWrapper>
          <Table
            products={replaceProduct}
            backgroundHead={theme.bulma.danger}
            foregroundHead={theme.bulma.white}
          />
        </GridItem>
        <GridItem>
          <SubtitleWrapper>
            <Circle color="hsl(48, 100%, 67%)" />
            <h3>Productos con pocas existencias</h3>
          </SubtitleWrapper>
          <Table
            products={toBuyProduct}
            backgroundHead={theme.bulma.warning}
            foregroundHead={theme.bulma.dark}
          />
        </GridItem>
        <GridItem>
          <SubtitleWrapper>
            <Circle color="hsl(141, 53%, 53%)" />
            <h3>Productos aun en inventario</h3>
          </SubtitleWrapper>
          <Table
            products={okProduct}
            backgroundHead={theme.bulma.success}
            foregroundHead={theme.bulma.white}
          />
        </GridItem>
      </GridWrapper>
    </>
  );
};

ResumenContent.propTypes = {
  products: PropTypes.array.isRequired
};

export default withTheme(ResumenContent);
