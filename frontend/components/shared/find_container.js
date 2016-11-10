import { connect } from 'react-redux';
import Find from './find';
import { groupsAsArray, eventsAsArray } from '../../reducers/selectors';
import { getGroups } from '../../actions/group_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = ({ groups, events }) => ({
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => dispatch(getGroups()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Find);
