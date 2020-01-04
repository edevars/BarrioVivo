import styled from "styled-components";
import PropTypes from "prop-types";
import Options from "./Options";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.1rem;
  box-shadow: 10px 10px 12px -11px ${props => props.theme.bulma.dark};
  width: ${props => (props.fullWidth ? "100%" : "inherit")};
  .head {
    background: ${props => props.backgroundHead || "black"};
    th {
      color: ${props => props.foregroundHead || "#fff"};
      padding: 8px 12px;
    }
  }

  tbody {
    th {
      font-weight: 400;
      padding: 8px 12px;
      border-bottom: 1px solid ${props => props.theme.bulma.greyLight};
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1360px) {
    width: 100%;
  }
`;

const Replace = ({
  products,
  backgroundHead,
  foregroundHead,
  fullWidth,
  options
}) => {
  return (
    <Table
      backgroundHead={backgroundHead}
      foregroundHead={foregroundHead}
      fullWidth={fullWidth}
    >
      <thead className="head">
        <tr>
          <th>id</th>
          <th width="50%">Nombre</th>
          <th>Cantidad minima</th>
          <th>En existencia</th>
          <th>Medida</th>
          {options && <th></th>}
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, minStock, inStock, unit }) => (
          <tr key={id}>
            <th>{id}</th>
            <th>{name}</th>
            <th>{minStock}</th>
            <th>{inStock}</th>
            <th>{unit}</th>
            {options && <Options />}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Replace.propTypes = {
  products: PropTypes.array.isRequired,
  backgroundHead: PropTypes.string.isRequired,
  foregroundHead: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  options: PropTypes.bool
};

export default Replace;
