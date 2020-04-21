import React from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

const Header = (props) => {
    console.log("Header",props)
  return (
    // <nav className="navbar navbar-dark bg-danger mb-4">
    //     <Link className="navbar-brand" to="/">Mercury Music</Link>
    //     <Link className="nav-link" to="/favorites"><i className="fas fa-star"></i> Favoris</Link>
    // </nav>

    <Nav className="navbar navbar-dark bg-dark mb-4" Style={"width: 100%"}>
      <Link className="navbar-brand" to="/">
        Mercury Music
      </Link>
      <Link className="navbar-brand" to="/favorites">
        <i className="fas fa-star"></i> Favorites
      </Link>
      <Link className="navbar-brand" to="/songs">
        SONGS
      </Link>
      <Link className="navbar-brand" to="/albums">
        ALBUMS
      </Link>
      <Link className="navbar-brand" to="/profile">
        PROFILE
      </Link>
      <Nav>
        {/* <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link> */}
        <Nav>
          {props.isSignin ? (
            <Button
              onClick={() => {props.isLogout()}}
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
  );
};
export default Header;
