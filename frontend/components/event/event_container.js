import { connect } from 'react-redux';
import Event from './event';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';

const mapStateToProps = ({ groups, events }, ownProps) => {
  let groupId = parseInt(ownProps.params.groupId);
  return {
  eventList: Object.keys(events.events).map(id=> events.events[id]),
  groupId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
