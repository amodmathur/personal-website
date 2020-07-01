import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


function BootstrapNavBar() {
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Amod Mathur</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="aboutme">About Me</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="interests">Interests</Nav.Link>
            </Nav> 
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default BootstrapNavBar;