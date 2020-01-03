import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchBox = styled.div`
  width: 100%;
  max-width: 600px;
  border-bottom: 1px solid ${props => props.theme.colors.dark};
  display: flex;
  padding-bottom: 5px;
  margin-bottom: 40px;

  .icon {
    font-size: 1.6rem;
    margin: 0px 10px;
  }

  input {
    width: 100%;
    border: none;
    font-size: 1rem;
  }
`;

const Search = ({ search }) => {
  return (
    <StyledSearchBox>
      <i className="las la-search icon" />
      <input
        type="text"
        placeholder="Buscar articulos"
        onChange={event => {
          search(event.target.value);
        }}
      />
    </StyledSearchBox>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
