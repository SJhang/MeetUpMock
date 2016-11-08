import { connect } from 'react-redux';
import Event from './event';
import { fetchEvent } from '../../actions/event_actions';

const mapStateToProps = ({ events }) => ({
  currentEvent: events.currentEvent ? events.currentEvent : {},
  eventList: Object.keys(events.events).map(id=>events.events[id])
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
