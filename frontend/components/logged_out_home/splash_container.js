import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
