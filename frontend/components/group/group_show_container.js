import { connect } from 'react-redux';
import GroupShow from './group_show';
import { fetchGroup } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  let groupId = parseInt(params.groupId);
  let group = selectGroup(state, groupId);
  return {
    groupId,
    group
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
