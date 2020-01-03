import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCategory = styled.div`
  padding: 10px 20px;
  background: ${props => props.theme.bulma.link};
  color: white;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
`;

const Category = ({ name }) => {
  return <StyledCategory>{name}</StyledCategory>;
};

Category.propTypes = {
  name: PropTypes.string
};

export default Category;
