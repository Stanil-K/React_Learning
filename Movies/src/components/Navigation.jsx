import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/timer">Timer</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/swapiCharacters">SWAPI Characters</Nav.Link>
            <Nav.Link as={Link} to="/uncontrolledForm">Uncontrolled Form</Nav.Link>
            <Nav.Link as={Link} to="/controlledForm">Controlled Form</Nav.Link>
            <Nav.Link as={Link} to="/controlledFormImproved">Improved Controlled Form</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/homeToDo">To Do List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
