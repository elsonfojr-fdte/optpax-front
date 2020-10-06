import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 7rem;
  padding: 0.8rem 0;

  cursor: pointer;

  color: white;

  & > span {
    margin-top: 0.5rem;
  }
`;
