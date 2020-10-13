import React from 'react';

/* Styles */
import { Container } from './styles';

const headerItems = [
  'Vôo/Responsável',
  'Tipo Op / Prefixo',
  'Categoria / Pax',
  'Origem',
  'Destino',
  'Estimado',
  'Início (Missão)',
  'Término (Missão)',
  'Decorrido (Missão)',
  'Deltas',
  'Solicitado (Despachante)',
  'Solicitado (Delta)',
  'Início (Delta)',
  'Término (Delta)',
  'Decorrido (Delta)',
];

const MissionHeaderTable = () => {
  return (
    <Container>
      <tr>
        {headerItems.map((h, index) => (
          <th key={index}>{h}</th>
        ))}
      </tr>
    </Container>
  );
};

export default MissionHeaderTable;
