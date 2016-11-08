import { connect } from 'react-redux';
import User from './user';
import {createImage} from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user_image: state.session.currentUser.profile_img
});

const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
