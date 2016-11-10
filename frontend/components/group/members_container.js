import { connect } from 'react-redux';
import Members from './members';
import {addMember, deleteMember} from '../../actions/group_actions';

const mapStateToProps = ({ groups, events }, ownProps) => {
  let groupId = parseInt(ownProps.params.groupId);
  let members;
  if (groups.groups[groupId]) {
    members = groups.groups[groupId].members;
  } else {
    members = [];
  }
  return {
    groupId,
    members
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
