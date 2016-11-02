import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser.username),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = location.pathname.slice(1);
  if (formType === "login") {
    formType = "Log in";
  } else {
    formType = "Sign up";
  }
  const processForm = (formType === 'Log in') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
