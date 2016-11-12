import { connect } from 'react-redux';
import Group from './group';
import { getGroups, fetchGroup } from '../../actions/group_actions';
import { selectGroup, groupsAsArray } from '../../reducers/selectors';
import { updateGroupSearchParam } from '../../actions/group_search_actions';

const mapStateToProps = ({ groups, searchParams }) => {
  let groupIndex = Object.keys(groups.groupIndex).map(id => groups.groupIndex[id]);
  let groupList = Object.keys(groups.groups).map(id=>groups.groups[id]);
  if (!searchParams.search && groupList.length === 0) {
    groupList = groupIndex;
  }
  return {
  groupList,
  searchParams
};};

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
