import { connect } from 'react-redux';
import GroupShow from './group_show';
import {logout} from '../../actions/session_actions';
import { fetchGroup, addMember, deleteMember } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  let groupId = parseInt(params.groupId);
  let group = selectGroup(state, groupId);
  let members;
  if (state.groups.groups[groupId]) {
    members = state.groups.groups[groupId].members;
  } else {
    members = [];
  }
  return {
    groupId,
    group,
    members
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  logout: user => dispatch(logout(user)),
  addMember: (user, id) => dispatch(addMember(user, id)),
  deleteMember: (user, groupId) => dispatch(deleteMember(user, groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
