import styled from "styled-components";

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

const Options = () => {
  return (
    <OptionsItem>
      <i className="icon add las la-plus" />
      <i className="icon edit las la-pen" />
      <i className="icon delete las la-trash-alt" />
    </OptionsItem>
  );
};

export default Options;
