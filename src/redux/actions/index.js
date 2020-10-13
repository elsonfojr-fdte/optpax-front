import { loadStatus } from '../slices/statusListSlice';
import { load } from '../slices/missionTableSlice';

export const loadMissions = () => (dispatch) => {
  const missions = [
    {
      // DÚVIDA: ALGUM CAMPO PARA STATUS DA MISSAO???
      status: 0,

      flight: {
        airlineCompany: '',
        name: 'AZU4536', // DUVIDA ???? numero do voo
        responsable: 'Lucas',
        observation: '', // DUVIDA ??????

        operationType: false, // booleano que indica se o avião está chegando
        prefix: 'MBA',

        category: 'PAX', // PAX, TRIP, Especial
        quantity: 156,

        origin: '507R',
        destiny: 'Dom-Leste',

        estimateHour: '2016-05-28T00:00:00.000Z',
        isTimeReal: false,
      },

      missionStart: '2020-09-10T11:22:00.000Z',
      missionEnd: '2020-09-10T11:42:16.000Z',

      // DUVIDA: NO CAMPO DELTA, O QUE É 1HORA????
      deltas: [
        {
          nome: 'D01',
          solicitado: '2020-09-10T11:22:00.000Z',
          inicio: '2020-09-10T11:22:00.000Z',
          termino: '2020-09-10T11:42:16.000Z',
        },
      ],
    },
  ];

  return dispatch(load(missions));
};

export const loadDeltas = () => (dispatch) => {
  return fetch('http://localhost:3001/deltas')
    .then((response) => response.json())
    .then(
      ({ deltas }) => dispatch(loadStatus({ deltas })),
      (err) => console.log('err', err)
    );
};
