import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import DetailsAlbum from "./components/DetailsAlbum";
import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import Forgot from "./components/auth/Forgot";
import Reset from "./components/auth/Reset";
import Profile from "./components/Profile";
import Header from "./components/widgets/Header";
import jwt_decode from "jwt-decode";
import Axios from "axios";
export default class Routes extends Component {
  state = {
    user: null,
    isSignin: false,

  };

  funcUser = () => {
    console.log(localStorage.token);
    if (localStorage.token) {
      let user = jwt_decode(localStorage.token);
      console.log(user.user);
      this.setState({ user: user.user, isSignin: true });
    } else {
      this.setState({ user: null , isSignin: false});
    }
  };

  componentDidMount() {
    this.funcUser();
  }

  userSignin = (signin) => {
    console.log("inside");
    console.log(!localStorage.token);
    if (!localStorage.token) {
      console.log("no token");
      Axios.post("http://localhost:8001/user/signin", signin)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            // let status = props.userSignin();
            let user = jwt_decode(res.data.token, "SECRET").user;
            console.log("user Signin", user);
            this.setState({
              user: user,
              isSignin: true,
            });
            return true;
          } else {
            return false;
            console.log("email or password not correct");
          }
        })
        .catch((err) => console.log(err));
    }
    // else {
    //   this.setState({
    //     user: null,
    //     isSignin: false,
    //   });
    // }
  };
  isLogout = () => {
    localStorage.removeItem("token");
    this.setState({
      user: null,
      isSignin: false,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Header
          isSignin={this.state.isSignin}
          userSignin={this.userSignin}
          isLogout={this.isLogout}
          funcUser={this.funcUser}
        />
        <Switch>
          <Route
            path="/signin"
            render={(props) => (
              <Signin {...props} userSignin={this.userSignin} />
            )}
          />
          {/* <Route path="/signin" component={Signin} /> */}
          <Route path="/forgot" component={Forgot} />
          <Route
            exact
            path="/reset/:token"
            render={(props) => <Reset {...props} />}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={DetailsAlbum} />
          {/* <Route path="/favorites" exact component={FavoritesAlbums} /> */}
          {this.state.isSignin ? (
            <>
              <Route
                path="/profile"
                render={() => <Profile user={this.state.user} />}
              />
            </>
          ) : (
            <>
              <Redirect to="/signin" />
            </>
          )}
        </Switch>
        <footer class="footerq">
  <div class="copyright">
    <p>&copy 2020 - MERCURY TEAM</p>
  </div>
  <div class="social">
    <a href="#" class="support">Contact Us</a>
    <a href="https://git.generalassemb.ly/Maram-Alfawaz/Mercury-Music" class="tweet">Github</a>
    <a href="https://www.linkedin.com/in/maram-alfawaz" class="linked">in</a>
    <a href="https://www.linkedin.com/in/bashayr-alhasani/" class="linked">in</a>

  </div>
</footer>
      </div>
    );
  }
}