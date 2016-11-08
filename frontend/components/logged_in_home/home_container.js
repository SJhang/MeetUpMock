import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = ({ session, groups, events }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser.username),
  groupList: Object.keys(groups).map(id => groups[id]),
  eventList: Object.keys(events).map(id => events[id])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
