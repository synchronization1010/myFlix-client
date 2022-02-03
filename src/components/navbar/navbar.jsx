import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './navbar.scss'

export class Navbar extends React.Component {
    constructor() {
      super();
  
      this.state = {};
    }
  
    onLoggedOut = () => {
      localStorage.clear();
      window.open("/", "_self");
    };

    render() {
        const { user } = this.props
        const movies = `/`;
        const profile = `/user/id/${user}`;
    
        return (

<Navbar bg="dark" variant="dark" expand="lg">
  <Container className="navbar-menu">
    <Navbar.Brand href={ movies }>90's Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Movies</Nav.Link>
        <NavDropdown title="Directors" id="basic-nav-dropdown">
          <NavDropdown.Item href="directors/Tim Burton">Tim Burton</NavDropdown.Item>
          <NavDropdown.Item href="directors/Luc Besson">Luc Besson</NavDropdown.Item>
          <NavDropdown.Item href="directors/Chris Columbus">Chris Columbus</NavDropdown.Item>
          <NavDropdown.Item href="directors/Peter Weir">Peter Weir</NavDropdown.Item>
          <NavDropdown.Item href="directors/Martin Campbell">Martin Campbell</NavDropdown.Item>
          <NavDropdown.Item href="directors/Michael Bay">Michael Bay</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Genres" id="basic-nav-dropdown">
          <NavDropdown.Item href="genres/Comedy">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="genres/Sci-Fi">Sci-Fi</NavDropdown.Item>
          <NavDropdown.Item href="genres/Action">Action</NavDropdown.Item>
          <NavDropdown.Item href="genres/Drama">Drama</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/profile">My Account ({user})</Nav.Link>
        <Nav.Link id="logout" onClick={() => { this.onLoggedOut() }}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        );
    }
}