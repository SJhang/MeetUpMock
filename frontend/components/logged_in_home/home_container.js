import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { fetchGroups, fetchGroup } from '../../actions/group_actions';

const mapStateToProps = ({ session, groups, events }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser.username)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
