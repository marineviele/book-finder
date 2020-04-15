import styled from 'styled-components';

export const SearchBarForm = styled.form`
  height: 50px;
  width: 500px;
  border: ${props => props.theme.borders.main};
  background-color: ${props => props.theme.colors.background};
  display: flex;
  -webkit-box-shadow: inset 0px 0px 7px ${props => props.theme.colors.shadowColor};
  -moz-box-shadow: inset 0px 0px 7px ${props => props.theme.colors.shadowColor};
  box-shadow: inset 0px 0px 7px ${props => props.theme.colors.shadowColor};

  input {
    flex: 0.9;
    padding: 0 10px;
    border: none;
    background-color: transparent;
  }

  button {
    flex: 0.1;
    padding-right: 10px;
  }
`;

export const SearchButton = styled.button`
    border: none;
    background-color: transparent;
`;
