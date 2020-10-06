import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  background-color: #efefef;
  height: calc(100vh - 60px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;
