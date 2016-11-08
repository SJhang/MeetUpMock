import { connect } from 'react-redux';
import Find from './find';
import { groupsAsArray, eventsAsArray } from '../../reducers/selectors';
import { fetchGroups } from '../../actions/group_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = ({ groups, events }) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Find);
