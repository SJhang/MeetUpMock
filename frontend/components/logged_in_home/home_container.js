import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { fetchAllGroups, fetchGroup } from '../../actions/group_actions';
import { fetchAllEvents } from '../../actions/event_actions';
import { updateGroupSearchParam } from '../../actions/group_search_actions';
import { updateEventSearchParam } from '../../actions/event_search_actions';

const mapStateToProps = ({ session, groups, events, searchParams }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  groupList: Object.keys(groups).map(id => groups[id]) || null,
  eventList: Object.keys(events).map(id => events[id]) || null,
  searchParams
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  fetchAllGroups: () => dispatch(fetchAllGroups()),
  fetchGroup: id => dispatch(fetchGroup(id)),
  updateGroupSearchParam: (searchParam, value) =>
    dispatch(updateGroupSearchParam(searchParam, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
