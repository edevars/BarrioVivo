import Category from "../../Components/Category";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as categoriesActions from "../../redux/actions/categoriesActions";
import styled from "styled-components";

const StyledCategories = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-bottom: 25px;
  @media screen and(max-width: 420px) {
    margin-bottom: 10px;
  }
`;

const Categories = ({ categories, getAllCategories, filterByCategory }) => {
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <StyledCategories>
      <Category name="Todos" filterByCategory={filterByCategory} />
      {categories.map(({ id, nombre }) => (
        <Category key={id} name={nombre} filterByCategory={filterByCategory} />
      ))}
    </StyledCategories>
  );
};

const mapStateToProps = reducers => {
  return reducers.categoriesReducer;
};

export default connect(mapStateToProps, categoriesActions)(Categories);
