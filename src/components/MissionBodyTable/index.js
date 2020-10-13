import React from 'react';
import PropTypes from 'prop-types';

import { flightType } from '../../propTypes';

import formatTime from '../../utils/time/formatTime';
import getDiffTime from '../../utils/time/getDiffTime';

const MissionBodyTable = ({ flight, missionStart, missionEnd }) => {
  const estimado = new Date(flight.estimateHour).toLocaleString('pt-BR', {
    timeStyle: 'short',
  });

  const missaoDecorrido = getDiffTime(missionStart)(missionEnd);
  const inicioMissao = formatTime(missionStart, 'hh:mm');
  const terminoMissao = formatTime(missionEnd, 'hh:mm');

  return (
    <tr>
      <td>{flight.responsable}</td>
      <td>{flight.prefix}</td>
      <td>
        {flight.category} {flight.quantity}
      </td>
      <td>{flight.origin}</td>
      <td>{flight.destiny}</td>
      <td>{estimado} (Estimado)</td>

      <td>{inicioMissao}</td>
      <td>{terminoMissao}</td>
      <td>{missaoDecorrido}</td>

      <td>D24</td>
      <td>07:54</td>
      <td>08:22</td>
      <td>08:22</td>
      <td>08:32</td>
      <td>00:10:36</td>
    </tr>
  );
};

MissionBodyTable.propTypes = {
  flight: flightType.isRequired,
  missionStart: PropTypes.string.isRequired,
  missionEnd: PropTypes.string.isRequired,
};

export default MissionBodyTable;
