import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {createImage} from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user_image: state.session.currentUser.profile_img
});

const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImage(image)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
