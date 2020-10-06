import styled from 'styled-components';

// HD - Header
// SL - Status List
// MT - Mission Table

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    'HD HD'
    'SL MT';

  height: 100vh;
`;
