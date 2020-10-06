import React from 'react';

/* Styles */
import { Container } from './styles';

// TODO: Organizar
const HeaderTable = () => {
  return (
    <thead>
      <tr>
        <th>
          Vôo/
          <br />
          Responsável
        </th>
        <th>Tipo Op / Prefixo</th>
        <th>Categoria / Pax</th>
        <th>Origem</th>
        <th>Destino</th>
        <th>Estimado</th>
        <th>Início (Missão)</th>
        <th>Término (Missão)</th>
        <th>Decorrido (Missão)</th>
        <th>Deltas</th>
        <th>Solicitado (Despachante)</th>
        <th>Solicitado (Delta)</th>
        <th>Início (Delta)</th>
        <th>Término (Delta)</th>
        <th>Decorrido (Delta)</th>
      </tr>
    </thead>
  );
};

// TODO: Organizar
const MissionTable = () => {
  return (
    <Container>
      <table>
        <HeaderTable />
        <tbody>
          <tr>
            <td>
              LUANA lorem ipsum LUANA lorem ipsumLUANA lorem ipsum LUANA lorem
              ipsumLUANA lorem ipsumLUANA lorem ipsum
            </td>
            <td>MBA</td>
            <td>Pax 118</td>
            <td>P204</td>
            <td>205R</td>
            <td>08:45 (Estimado)</td>
            <td>08:22</td>
            <td>08:42</td>
            <td>00:20:16</td>
            <td>D24</td>
            <td>07:54</td>
            <td>08:22</td>
            <td>08:22</td>
            <td>08:32</td>
            <td>00:10:36</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default MissionTable;
