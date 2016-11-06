import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser.username),
  groups: session.groups,
  events: session.events
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
