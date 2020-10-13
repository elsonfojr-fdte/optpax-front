import PropTypes from 'prop-types';

const { bool, number, shape, string, oneOf } = PropTypes;

export const flightType = shape({
  airlineCompany: string,
  name: string,
  responsable: string,
  observation: string,

  operationType: bool.isRequired,
  prefix: string.isRequired,

  category: oneOf(['PAX', 'TRIP', 'Especial']).isRequired,
  quantity: number.isRequired,

  origin: string.isRequired,
  destiny: string.isRequired,

  estimateHour: string.isRequired,
  isTimeReal: bool,
});
