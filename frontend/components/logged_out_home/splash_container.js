import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser,
};};


const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
