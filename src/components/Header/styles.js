import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-background-dark);

  & > div {
    display: flex;
    align-items: center;

    &:first-child > * {
      border-right: 1px solid #fff;
    }
  }
`;
