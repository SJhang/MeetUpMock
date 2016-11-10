import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => {
  let eventId = parseInt(params.eventId);
  let event = selectEvent(state, eventId);

  return {
    eventId,
    event
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
