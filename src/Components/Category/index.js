import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCategory = styled.button`
  padding: 10px 20px;
  background: ${props => props.theme.bulma.link};
  color: white;
  font-size: 1rem;
  display: inline-block;
  font-weight: bold;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Category = ({ name, filterByCategory }) => {
  return (
    <StyledCategory
      name={name}
      onClick={event => {
        filterByCategory(event.target.name);
      }}
    >
      {name}
    </StyledCategory>
  );
};

Category.propTypes = {
  name: PropTypes.string
};

export default Category;
