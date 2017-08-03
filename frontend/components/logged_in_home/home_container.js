import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getGroups, fetchGroup } from '../../actions/group_actions';
import { updateGroupSearchParam } from '../../actions/group_search_actions';

const mapStateToProps = ({ session, groups, events, searchParams }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  groupList: Object.keys(groups.groups).map(id=>groups.groups[id]),
  searchParams
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getGroups: () => dispatch(getGroups()),
  fetchGroup: id => dispatch(fetchGroup(id)),
  updateGroupSearchParam: (searchParam, value) =>
    dispatch(updateGroupSearchParam(searchParam, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
