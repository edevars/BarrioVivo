import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  .block {
    display: inline-block;
  }

  .name {
    width: 70%;
  }

  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.1rem;
  box-shadow: 10px 10px 12px -11px ${props => props.theme.bulma.dark};

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

  .icon {
    margin-right: 15px;
    padding: 5px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .delete {
    background: ${props => props.theme.bulma.danger};
    color: ${props => props.theme.bulma.white};
  }

  .edit {
    background: ${props => props.theme.bulma.warning};
    color: ${props => props.theme.bulma.dark};
  }

  @media screen and (max-width: 1360px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    .name {
      width: auto;
    }

    .head {
      th {
        padding: 5px 2px;
      }
    }

    tbody {
      th {
        padding: 5px 2px;
      }
    }
  }
`;

const Replace = ({
  items,
  backgroundHead,
  foregroundHead,
  onClickEdit,
  onClickDelete
}) => {
  return (
    <Table backgroundHead={backgroundHead} foregroundHead={foregroundHead}>
      <thead className="head">
        <tr>
          <th>id</th>
          <th className="name">Nombre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name }) => (
          <tr key={id}>
            <th>{id}</th>
            <th>{name}</th>
            <th>
              <i
                className="icon edit las la-pen"
                onClick={() => {
                  onClickEdit(id);
                }}
              />
              <i
                className="icon delete las la-trash-alt"
                onClick={() => {
                  onClickDelete(id);
                }}
              />
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Replace.propTypes = {
  items: PropTypes.array.isRequired,
  backgroundHead: PropTypes.string,
  foregroundHead: PropTypes.string,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default Replace;
