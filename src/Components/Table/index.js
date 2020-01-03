import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 85%;
  font-size: 1.1rem;
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
`;

const Replace = ({ products, backgroundHead, foregroundHead }) => {
  return (
    <Table backgroundHead={backgroundHead} foregroundHead={foregroundHead}>
      <thead className="head">
        <tr>
          <th>id</th>
          <th width="60%">Nombre</th>
          <th>
            <abbr title="Cantindad minima">C. minima</abbr>
          </th>
          <th>En existencia</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, minStock, inStock }) => (
          <tr key={id}>
            <th>{id}</th>
            <th>{name}</th>
            <th>{minStock}</th>
            <th>{inStock}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Replace.propTypes = {
  products: PropTypes.array.isRequired,
  backgroundHead: PropTypes.string.isRequired,
  foregroundHead: PropTypes.string.isRequired
};

export default Replace;
