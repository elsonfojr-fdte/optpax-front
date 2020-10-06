import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 80px auto;
  grid-template-rows: 1fr;

  padding: 1rem 1.2rem;

  border-bottom: 1px solid #ccc;

  background-color: ${(props) =>
    (props.status === 'inUse' && '#ADD8E6') ||
    (props.status === 'available' && '#90EE90') ||
    (props.status === 'maintenance' && '#EE82EE') ||
    (props.status === 'unavailable' && '#D3D3D3')};
`;
