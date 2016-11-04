import { connect } from 'react-redux';
import User from './user';
import { createImage } from '../../actions/image_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImage(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
