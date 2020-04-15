import styled from 'styled-components';

export const FooterThemed = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 3px 50px;
  background-color: ${props => props.theme.colors.background};
  font-size: 12px;
  text-align: center;
  border-top: 5px solid ${props => props.theme.colors.secondary};
`;
