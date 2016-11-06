import { connect } from 'react-redux';
import Splash from './splash';
import { signup } from '../../actions/session_actions';
import { fetchAllEvents } from '../../actions/event_actions';

const mapStateToProps = ({session, events, groups}) => {
  debugger
  return {
  currentUser: session.currentUser,
  events: events
}};


const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
