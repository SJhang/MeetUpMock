import { connect } from 'react-redux';
import GroupCreate from './group_create';
import { createGroup } from '../../actions/group_actions';

const mapStateToProps = ({ groupIndex }) => ({
  
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
