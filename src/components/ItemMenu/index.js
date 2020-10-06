import React from 'react';

/* Styles */
import { Container } from './styles';

const ItemMenu = ({ icon, title }) => {
  return (
    <Container>
      {icon}
      <span>{title}</span>
    </Container>
  );
};

export default ItemMenu;
