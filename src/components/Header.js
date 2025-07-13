import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function Header({ showCategory = false }) {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" height="40" />
        </Navbar.Brand>
        {showCategory && (
          <Nav className="ms-auto align-items-center">
            <span className="me-3">Kategori</span>
            <Image
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              roundedCircle
              height="40"
            />
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;