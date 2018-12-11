import { connect } from 'react-redux';

import { listLoading, listSelector } from '../Modules/OpenJob/selectors';
import OpenJobsList from '../Components/OpenJobsList';
import { openJobsListRequest } from '../Modules/OpenJob/actions';

const mapStateToProps = state => ({
  list: listSelector(state),
  loading: listLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(openJobsListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenJobsList);
