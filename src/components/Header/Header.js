import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../icons-images/science.png";

const Header = () => {
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand className="fs-2 text-white">
            <img
              alt=""
              src={headerLogo}
              width="30"
              height="30"
              className="d-inline-block align-center"
            />{" "}
            Quiz Coconut
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="nav-links fs-4">
              <NavLink to="/">Topics</NavLink>

              <NavLink to="/statistics">Statistics</NavLink>

              <NavLink to="/blog">Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
