import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { loadDeltas } from '../../redux/actions';

/* Hooks */
import { useInterval } from '../../hooks/useInterval';

/* Components */
import DeltaStatusList from '../../components/DeltaStatusList';
import Header from '../../components/Header';
import MissionTable from '../../components/MissionTable';

/* Styles */
import { Container } from './styles';

const Layout = ({ value, loadDeltas }) => {
  useEffect(() => {
    async function fetch() {
      await loadDeltas();
    }
    fetch();
  }, [loadDeltas]);

  useInterval(async () => await loadDeltas(), 3000);

  return (
    <Container>
      <Header />
      <DeltaStatusList deltaList={value.deltas} />
      <MissionTable />
    </Container>
  );
};

const mapStateToProps = (store) => ({
  value: store.data.value,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadDeltas }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
