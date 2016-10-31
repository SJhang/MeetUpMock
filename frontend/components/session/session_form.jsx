import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  // displayErrors(){
  // }

  update(property){
    return ( e => this.setState({[property]: e.target.value}));
  }

  oppositePath(){
    if(window.location.hash === "#/signup"){
      return "#/login";
    } else { return "#/signup"; }
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
      <div>
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
