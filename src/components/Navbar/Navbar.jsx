import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from "styles/Navbar.module.css";

function Navigation() {
  return (
    <Navbar expand="lg" className={`${styles.navbar} bg-body-tertiary`} data-bs-theme="dark" sticky='top'>
      <Container className={styles.navContainer}>
        <Navbar.Brand href="#home">ROJAS Manuel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                React.js Videogame Demo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                React.js TODO App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Next.js Weather App
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;