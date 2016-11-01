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

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
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
    if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
  }

  render(){
    return (
      <div className="session-form">
        <h1>{this.props.formType}</h1>
        {this.navLink()}

        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}>
            </input>
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}>
            </input>
          </label>

          <input type="submit" value="Submit"/>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
