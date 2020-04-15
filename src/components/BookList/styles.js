import styled from 'styled-components';

export const BookListThemed = styled.div`
  ul {
    padding: 0 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 50px;
  }
`