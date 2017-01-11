import { connect } from 'react-redux';
import GroupCreate from './group_create';
import { createGroup } from '../../actions/group_actions';
import { groupsAsArray } from '../../reducers/selectors';

const mapStateToProps = ({groups, session}) => {
  return {
  groupArray: groupsAsArray(groups),
  currentUser: session.currentUser,
  titleError: groups
};};

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
