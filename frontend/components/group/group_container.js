import { connect } from 'react-redux';
import Group from './group';
import { fetchGroups, fetchGroup } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  groupList: Object.keys(state.groups.groups).map(id=>state.groups.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
