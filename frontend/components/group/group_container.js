import { connect } from 'react-redux';
import Group from './group';
import { getGroups, fetchGroup } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';
import { updateGroupSearchParam } from '../../actions/group_search_actions';

const mapStateToProps = ({ groups, searchParams }) => ({
  groupList: Object.keys(groups.groups).map(id=>groups.groups[id]),
  searchParams
  });

const mapDispatchToProps = dispatch => {
  return{
  getGroups: () => dispatch(getGroups()),
  fetchGroup: id => dispatch(fetchGroup(id)),
  updateGroupSearchParam: (searchParam, value) =>
    dispatch(updateGroupSearchParam(searchParam, value))
};};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
