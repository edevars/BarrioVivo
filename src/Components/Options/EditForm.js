import styled from "styled-components";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const FormWrapper = styled.div`
  position: fixed;
  background: ${props => props.theme.bulma.light};
  border-radius: 25px;
  z-index: 2;
  width: 400px;
  left: calc(50% - 200px);
  top: calc(50vh - 300px);

  @media screen and (max-width: 420px) {
    width: 280px;
    left: calc(50% - 140px);
  }
`;

const InnerWrapper = styled.div`
  margin: 50px auto 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-top: 10px;
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  width: calc(100% - 1.6em);
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  padding: 0.6em 0.8em;
`;

const StyledForm = styled.form`
  flex-direction: column;
  label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }

  .boton {
    width: 100%;
    display: block;
    margin-top: 50px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    background: ${props => props.theme.bulma.primary};
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    outline: none;
    margin-bottom: 50px;
  }

  select {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &::-ms-expand {
      display: none;
    }
    &:hover {
      border-color: #888;
    }
    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }
  }
`;

const AddForm = props => {
  const { categories } = props.categoriesReducer;
  const { selectedModalProduct } = props.modalReducer;

  return (
    <FormWrapper>
      <InnerWrapper>
        <Title>Editar producto</Title>
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <label>Nombre</label>
          <StyledInput type="text" value={selectedModalProduct.name} />
          <label>Categoria</label>
          <select name="" id="" value={selectedModalProduct.category}>
            {categories.map(({ nombre }, index) => (
              <option key={index} value={nombre}>
                {nombre}
              </option>
            ))}
          </select>

          <label>En existencia</label>
          <StyledInput type="text" value={selectedModalProduct.inStock} />

          <label>Stock minimo</label>
          <StyledInput type="text" value={selectedModalProduct.minStock} />

          <label>Unidad</label>
          <select name="" id="" value={selectedModalProduct.unit}>
            <option value="L">L</option>
            <option value="kg">kg</option>
            <option value="gr">gr</option>
            <option value="pz">pz</option>
          </select>

          <input type="submit" className="boton" value="Guardar Cambios" />
        </StyledForm>
      </InnerWrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ categoriesReducer, modalReducer }) => {
  return { categoriesReducer, modalReducer };
};

export default connect(mapStateToProps, { getAllCategories })(AddForm);
