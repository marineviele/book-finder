import styled from 'styled-components';

export const BookCardThemed = styled.li`
  border: ${(props) => props.theme.borders.main};
  padding: 25px;
  display: flex;
  flex-wrap: wrap;

  -webkit-box-shadow: 7px 7px 10px ${(props) => props.theme.colors.shadow};
  -moz-box-shadow: 7px 7px 10px ${(props) => props.theme.colors.shadow};
  box-shadow: 7px 7px 10px ${(props) => props.theme.colors.shadow};
  background-color: ${(props) => props.theme.colors.background};

  & > p {
    width: 100%;
    border-top: ${(props) => props.theme.borders.main};
    padding-top: 10px;
    margin-top: 10px;
    text-align: justify;
    text-indent: 20px;
    -webkit-box-shadow: inset 0px 7px 3px -4px ${(props) => props.theme.colors.shadow};
    -moz-box-shadow: inset 0px 7px 3px -4px ${(props) => props.theme.colors.shadow};
    box-shadow: inset 0px 7px 3px -4px ${(props) => props.theme.colors.shadow};
  }
`;

export const BookCardHeader = styled.section`
  display: flex;

  a {
    img {
      width: auto;
      height: 130px;
      border: ${(props) => props.theme.borders.main};
    }
    img:hover {
      -webkit-box-shadow: 7px 7px 10px
        ${(props) => props.theme.colors.shadowColor};
      -moz-box-shadow: 7px 7px 10px ${(props) => props.theme.colors.shadowColor};
      box-shadow: 7px 7px 10px ${(props) => props.theme.colors.shadowColor};
    }
  }

  div {
    margin: 0 10px;

    h3:hover {
      -webkit-text-shadow: 5px 5px 5px
        ${(props) => props.theme.colors.shadowColor};
      -moz-text-shadowcolor: 5px 5px 5px
        ${(props) => props.theme.colors.shadowColor};
      text-shadow: 5px 5px 5px ${(props) => props.theme.colors.shadowColor};
    }

    h4 {
      padding-top: 10px;
    }
  }
`;
