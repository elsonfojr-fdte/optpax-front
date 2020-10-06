import React from 'react';

/* Components */
import DeltaStatusItem from '../DeltaStatusItem';

/* Styles */
import { Container } from './styles';

const DeltaStatusList = ({ deltaList }) => {
  return (
    <Container>
      {deltaList.map((d, index) => (
        <DeltaStatusItem
          key={index}
          status={d.status}
          name={d.name}
          sector={d.sector}
          driver={d.driver}
        />
      ))}
    </Container>
  );
};

export default DeltaStatusList;
