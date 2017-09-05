import { connect } from 'react-redux';
import Members from './members';
import {addMember, deleteMember} from '../../actions/group_actions';
import { fetchUser } from '../../actions/user_actions';
import values from 'lodash/values';
import { selectGroup, selectOrganizer } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  let group = selectGroup(state, match.path.split('/')[2]);
  let members = group.members;
  let organizer = selectOrganizer(state, group.organizer_id);
  return {
    members,
    organizer
  }
};


const mapDispatchToProps = dispatch => ({
  findOrganizer: (id) => dispatch(fetchUser(id)),
  addMember: (user, id) => dispatch(addMember(user, id)),
  deleteMember: (user, groupId) => dispatch(deleteMember(user, groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
