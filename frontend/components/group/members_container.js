import { connect } from 'react-redux';
import Members from './members';
import {addMember, deleteMember} from '../../actions/group_actions';
import values from 'lodash/values';

const mapStateToProps = ({ groups, events, session }, ownProps) => {
  let groupId = parseInt(ownProps.params.groupId);
  let groupIndex = values(groups.groupIndex);
  let group = groupIndex[groupId] || {};
  let members;
  if (groups.groups[groupId]) {
    members = groups.groups[groupId].members;
  } else {
    members = [];
  }
  console.log(members);
  return {
    groupId,
    group,
    members,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  addMember: (user, id) => dispatch(addMember(user, id)),
  deleteMember: (user, groupId) => dispatch(deleteMember(user, groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
