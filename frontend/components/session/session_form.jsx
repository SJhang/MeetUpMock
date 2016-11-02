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
    if (this.props.formType === "Log in") {
			return (
        <h5>New to Meet Ups? &nbsp;
          <Link to="/signup">Create an account</Link>
        </h5>
      );
		} else {
			return (
        <h5>Already a member? &nbsp;&nbsp;&nbsp;
          <Link to="/login">Log in</Link>
        </h5>
      );
		}
  }

  render(){
    return (
      <div className="session-cont">
        <div className="grad-line"></div>
        <div className="session-form">

          <h1>{this.props.formType}</h1>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username">
              </input>
              {this.displayErrorMessages('username')}
            </label>

            <h6>{this.props.errors}</h6>

            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password">
              </input>
              {this.displayErrorMessages('password')}
            </label>

            <h6>{this.props.errors}</h6>

            <button>Submit</button>
          </form>
          <div className="session-redirect">
            {this.navLink()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
