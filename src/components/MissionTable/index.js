import React from 'react';

/* Components */
import MissionBodyTable from '../MissionBodyTable';
import MissionHeaderTable from '../MissionHeaderTable';

/* Styles */
import { Container } from './styles';

/* PropTypes */
import { missionTableType } from '../../propTypes';

// TODO: Organizar
const MissionTable = ({ missionTable }) => {
  return (
    <Container>
      <table>
        <MissionHeaderTable />

        <tbody>
          {missionTable.map((m, index) => (
            <MissionBodyTable
              key={index}
              flight={m.flight}
              missionStart={m.missionStart}
              missionEnd={m.missionEnd}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

MissionTable.propTypes = {
  missionTable: missionTableType,
};

export default MissionTable;
