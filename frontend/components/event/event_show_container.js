import { connect } from 'react-redux';
import EventShow from './event_show';
import { updateEvent, addAttendee, deleteAttendee } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';

// let eventId = parseInt(params.eventId);
// let event = selectEvent(state, eventId);
// let attendees = event.attendees || [];
// return {
//   eventId,
//   event,
//   attendees,
//   currentUser: state.session.currentUser
// };
const mapStateToProps = (state, { params }) => {
};

const mapDispatchToProps = dispatch => ({
  updateEvent: event => dispatch(updateEvent(event)),
  addAttendee: (user, id) => dispatch(addAttendee(user, id)),
  deleteAttendee: (user, id) => dispatch(deleteAttendee(user,id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
