import styled from 'styled-components';

export const BookCardThemed = styled.li`
  border: ${props => props.theme.borders.main};
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px 10px;
  -webkit-box-shadow: 7px 7px 10px ${props => props.theme.colors.shadow};
  -moz-box-shadow: 7px 7px 10px ${props => props.theme.colors.shadow};
  box-shadow: 7px 7px 10px ${props => props.theme.colors.shadow};
  background-color: ${props => props.theme.colors.background};
  
  a {
    align-self: self-end;
  }
  
  img {
    width: auto;
    height: 130px;
    border: ${props => props.theme.borders.main};
    align-self: flex-end;
  }
  
  img:hover {
    -webkit-box-shadow: 7px 7px 10px ${props => props.theme.colors.shadowColor};
    -moz-box-shadow: 7px 7px 10px ${props => props.theme.colors.shadowColor};
    box-shadow: 7px 7px 10px ${props => props.theme.colors.shadowColor};
  }
  
  h3:hover {
    -webkit-text-shadow: 5px 5px 5px ${props => props.theme.colors.shadowColor};
    -moz-text-shadowColor: 5px 5px 5px ${props => props.theme.colors.shadowColor};
    text-shadow: 5px 5px 5px ${props => props.theme.colors.shadowColor};
  }
  
  #info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
  
  h4 {
    padding-top: 10px;
  }
  
  & > p {
    grid-column-end: span 2;
    border-top: ${props => props.theme.borders.main};
    padding-top: 10px;
    text-align: justify;
    text-indent: 20px;
    -webkit-box-shadow: inset 0px 7px 3px -4px ${props => props.theme.colors.shadow};
    -moz-box-shadow: inset 0px 7px 3px -4px ${props => props.theme.colors.shadow};
    box-shadow: inset 0px 7px 3px -4px ${props => props.theme.colors.shadow};
  }
  
`