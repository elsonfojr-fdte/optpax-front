import PropTypes from 'prop-types';
import { flightType } from './flightType';

const { arrayOf, shape, string, number } = PropTypes;

export const missionTableType = arrayOf(
  shape({
    status: number.isRequired,

    voo: flightType,

    missionStart: string,
    missionEnd: string,

    deltas: arrayOf(
      shape({
        nome: string,
        solicitado: string,
        inicio: string,
        termino: string,
      })
    ),
  })
);
