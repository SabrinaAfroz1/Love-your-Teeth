import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teeth_img from '../../../header_img.jpg';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            alt=""
                            src={teeth_img}
                            width="40"
                            height="40"
                            className="d-inline-block align-top rounded-circle "
                        />{' '}
                        <span className="fw-bolder fs-3">Love your Teeth</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>

            </div>

        </div>
    );
};

export default Header;