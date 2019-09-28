import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Nav, AccountDropdown } from "tabler-react";



class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    localStorage.setItem("loggedIn", true);
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    localStorage.removeItem("loggedIn");
  }

  render() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    let button;

    if (isLoggedIn) {
      button =<LogoutButton onClick={this.handleLogoutClick} />;
      return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            <div className='log-out'>{button}</div>
          </div>
        );
    } 
    else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />

          </div>
        );
    }


  }
}

function Greeting(props) {


  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
    <div>
      <Nav>
          <Nav.Item value="Dashboard" icon="globe" to="/" />
          <Nav.Item value="Chatroom" to='/chatroom' />
          <Nav.Item value="Trending News" to='/trending' />
          <Nav.Item value="Profile" to='/profile_overview' />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />

          <AccountDropdown
              avatarURL="./demo/faces/female/25.jpg"
              name="Andrew Rodrigue"
              description="Administrator"
              options={[
                  { icon: "profile", value: "Profile", to: "/profile_overview" },
                  "logout",
              ]}
          />
      </Nav>
    </div>);
  }
  return (
      <div>
          <Nav>
              <Nav.Item value="Dashboard" icon="globe" to="/" />
              <Nav.Item value="Chatroom" to='/chatroom' />
              <Nav.Item value="Trending News" to='/trending' />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item />
              <Nav.Item value="Login/Signup" to='/login' />

          </Nav>
      </div>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
  export default LoginControl;