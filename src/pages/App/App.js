import React, {
  Component
} from "react";
import {
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";
import userService from "../../utils/userService";
// import tokenService from '../../utils/tokenService';
import "./App.css";

/*------ Pages ------*/
// import SignupPage from '../SignupPage/SignupPage';
import LoginPage from "../LoginPage/LoginPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*------ Handlers ------*/
  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  render() {
    console.log(this.state.user);
    return ( <div className = "App" >
      <header className = "App-header" >
      <p > HELLO WORLD! </p> <nav >
      <NavLink to = "/"
      className = "Nav-link" >
      HOME </NavLink> <NavLink to = "/login"
      className = "Nav-link" >
      LOGIN </NavLink> </nav > </header>

      <Switch >
        <Route exact path = "/login"
        render = {
          ({
            history
          }) => ( <LoginPage history = {
              history
            }
            handleSignupOrLogin = {
              this.handleSignupOrLogin
            }
            />
          )
        }
        /> 
      </Switch > </div>
    );
  }
}

export default App;