import React from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
const Header = (props) => {
  console.log("Header", props);
  return (
 <div Style={"height:600"}>
    <Nav className="navbar navbar-dark mb-4" Style={"background: #DD17F" } >
      <Link className="navbar-brand" to="/">
      <div>
                    <img width="100" height="100" src="" alt="profile-photo"/>
                </div>
       
      </Link>
     
      <Link className="navbar-brand" to="/">
       ALL MUSICS
      </Link>
      <Link className="navbar-brand" to="/profile">
        PROFILE
      </Link>
      <Nav>
  
        <Nav>
          {props.isSignin ? (
            <Button
              onClick={() => {
                props.isLogout();
                localStorage.removeItem("token");
                props.funcUser();
              }}
              variant="outline-light"
            >
              LOG OUT
            </Button>
          ) : (
            <>
              <Button as={Link} to="/signin" variant="outline-light">
                SIGN IN
              </Button>
              <Button
                as={Link}
                to="/signup"
                variant="outline-light"
                className="ml-3"
              >
                SIGN UP
              </Button>
            </>
          )}
        </Nav>
      </Nav>
    </Nav>
    </div>
  );
};
export default Header;