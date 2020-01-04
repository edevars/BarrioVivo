import styled from "styled-components";
import PropTypes from "prop-types";

const OptionsItem = styled.th`
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

  .add {
    background: ${props => props.theme.bulma.success};
    color: white;
  }

  .edit {
    background: ${props => props.theme.bulma.warning};
    color: ${props => props.theme.bulma.dark};
  }

  .delete {
    background: ${props => props.theme.bulma.danger};
    color: ${props => props.theme.bulma.white};
  }
`;

const Options = ({ id, handleOpenAdd, handleOpenEdit }) => {
  return (
    <OptionsItem>
      <i
        className="icon add las la-plus"
        onClick={() => {
          console.log(`Añadir producto: ${id}`);
          handleOpenAdd();
        }}
      />
      <i
        className="icon edit las la-pen"
        onClick={() => {
          console.log(`Editar producto: ${id}`);
          handleOpenEdit();
        }}
      />
      <i
        className="icon delete las la-trash-alt"
        onClick={() => {
          console.log(`Eliminar producto: ${id}`);
        }}
      />
    </OptionsItem>
  );
};

Options.propTypes = {
  id: PropTypes.number.isRequired,
  handleOpenAdd: PropTypes.func.isRequired,
  handleOpenEdit: PropTypes.func.isRequired
};

export default Options;