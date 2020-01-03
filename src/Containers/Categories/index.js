import Category from "../../Components/Category";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as categoriesActions from "../../redux/actions/categoriesActions";
import styled from "styled-components";

const StyledCategories = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Categories = ({ categories, getAllCategories }) => {
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <StyledCategories>
      {categories.data.map(({ nombre }) => (
        <Category name={nombre} />
      ))}
    </StyledCategories>
  );
};

const mapStateToProps = reducers => {
  return reducers.categoriesReducer;
};

export default connect(mapStateToProps, categoriesActions)(Categories);
