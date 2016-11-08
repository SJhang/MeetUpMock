import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  displayErrorMessages(errorType) {
    if (this.props.errors[errorType]) {
      this.props.errors[errorType].map(errors => (
        <h6>{errors}</h6>
      ));
    }
  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(property) {
    return e => (
      this.setState({[property]: e.target.value})
    );
  }

  navLink(){
    if (this.props.formType === "Sign in") {
			return (
        <h5>New to Meet Ups? &nbsp;
          <Link to="/signup">Create account</Link>
        </h5>
      );
		} else {
			return (
        <h5>Already a member? &nbsp;&nbsp;&nbsp;
          <Link to="/login">Sign in</Link>
        </h5>
      );
		}
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let usern = "sonikjhang";
    let pass = "asdfasdf";
    this.state = {username: usern, password: pass};
    let user = this.state;
    this.props.login(user);
  }

  render(){
    return (
      <div className="session-container">
        <i className="fa fa-meetup fa-5x" aria-hidden="true" onClick={()=>this.props.router.push('/')}></i>
        <h1>{this.props.formType}</h1>
        <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <div className="grad-line"></div>
              <div className="auth-form">
                <div>
                  <label htmlFor="login-field">Username</label>
                  <input
                    id="login-field"
                    className="input-block"
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Enter your Username">
                  </input>
                  <h6>{this.props.errors}</h6>

                  <label htmlFor="password-field">Password</label>
                  <input
                    id="password-field"
                    className="input-block"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Enter your Password">
                  </input>
                  <h6>{this.props.errors}</h6>

                  <button>Submit</button>
                </div>
              </div>
            </form>

          <div className="session-redirect">
            {this.navLink()}
            <h5>Log in as Guest &nbsp;
              <button
                className="guest-button"
                onClick={this.handleGuestLogin}>Guest Sign in</button>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
