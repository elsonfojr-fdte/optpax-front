import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MT;

  /* TODO: Organizar */
  & > table > thead > tr > th {
    text-align: left;
    padding: 6px;
    &:not(:first-child) {
      width: 6.5rem;
    }
  }
`;
