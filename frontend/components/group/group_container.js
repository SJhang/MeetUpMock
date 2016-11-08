import { connect } from 'react-redux';
import Group from './group';
import { fetchGroups, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({ groups }) => ({
  currentGroup: groups.currentGroup ? groups.currentGroup : {}
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchGroup: id => dispatch(fetchGroup(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
