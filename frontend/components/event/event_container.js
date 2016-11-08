import { connect } from 'react-redux';
import Event from './event';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';

const mapStateToProps = ({ events }) => ({
  currentEvent: events.currentEvent ? events.currentEvent : {}
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
