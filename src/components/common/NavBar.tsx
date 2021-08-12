import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">React-Bootstrap</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
