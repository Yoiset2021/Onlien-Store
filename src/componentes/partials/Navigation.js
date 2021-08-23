import React from 'react'
import { Navbar, NavbarBrand, Container, Nav } from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Container>
                <NavbarBrand href="/"> Online Store </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="/productos"> Productos </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
