import styled from 'styled-components';

export const HeaderThemed = styled.header`
  padding: 0 50px;
  height: 240px;

  h1 {
    position: absolute;
    top: 127px;
  }

  form {
    position: absolute;
    top: 165px;
    z-index: 2;
  }

  img {
    height: 170px;
    position: absolute;
    top: 30px;
    left: 380px;
    z-index: 1;
  }

  .react-switch {
    position: relative !important;
    right: 0px;
    top: 50px;

    -webkit-box-shadow: 5px 5px 10px ${(props) => props.theme.colors.shadowColor};
    -moz-box-shadow: 5px 5px 10px ${(props) => props.theme.colors.shadowColor};
    box-shadow: 5px 5px 10px ${(props) => props.theme.colors.shadowColor};
  }
  
  @media only screen and (min-width: 750px) {
    .react-switch {
      position: absolute !important;
      top: 175px;
      right: 100px;
    }
  }
`;

