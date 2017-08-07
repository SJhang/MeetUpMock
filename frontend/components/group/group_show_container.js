import { connect } from 'react-redux';
import GroupShow from './group_show';
import {logout} from '../../actions/session_actions';
import { fetchGroup, addMember, deleteMember } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';
import values from 'lodash/values';

const mapStateToProps = (state, { match }) => {
  const group = selectGroup(state, match.params.groupId);
  return (
    group
  )
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  logout: user => dispatch(logout(user)),
  addMember: (user, id) => dispatch(addMember(user, id)),
  deleteMember: (user, groupId) => dispatch(deleteMember(user, groupId)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
