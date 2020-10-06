import React from 'react';
import { Container } from './styles';

const DeltaStatusItem = ({ name, sector, driver, status }) => {
  return (
    <Container status={status}>
      <span>{name}</span>
      <span>{sector}</span>
      <span>{driver}</span>
    </Container>
  );
};

export default DeltaStatusItem;
