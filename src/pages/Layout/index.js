import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { loadDeltas, loadMissions } from '../../redux/actions';

/* Hooks */
import { useInterval } from '../../hooks/useInterval';

/* Components */
import DeltaStatusList from '../../components/DeltaStatusList';
import Header from '../../components/Header';
import MissionTable from '../../components/MissionTable';

/* Styles */
import { Container } from './styles';

const Layout = ({ value, missionTable, loadDeltas, loadMissions }) => {
  useEffect(() => {
    async function fetch() {
      await loadDeltas();
      await loadMissions();
    }
    fetch();
  }, [loadDeltas, loadMissions]);

  useInterval(async () => {
    await loadDeltas();
    await loadMissions();
  }, 5000);

  return (
    <Container>
      <Header />
      <DeltaStatusList deltaList={value.deltas} />
      <MissionTable missionTable={missionTable} />
    </Container>
  );
};

const mapStateToProps = (store) => ({
  value: store.statusListSlice.value,
  missionTable: store.missionTableSlice,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadDeltas, loadMissions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
