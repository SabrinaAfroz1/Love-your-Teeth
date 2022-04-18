import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teeth_img from '../../../header_img.jpg';
import section_img from '../../../section_img.jpg';

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

            <div className="container mt-5">
                <div class="row">
                    <div class="col-sm-12 col-lg-8 mt-5">
                        <h2 className="fs-1">Dental Implants Specialist</h2>
                        <p className="fs-5 mt-4">At The Center for High Tech Dentistry, the goal of Simon W. Rosenberg, DMD, and the team is to provide comprehensive oral health care to people of all ages living in and around the Upper East Side of Manhattan and throughout New York City.</p>
                        <button type="button" class="btn btn-dark px-4 fs-4 mt-5">Learn More</button>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <img className=" rounded-circle" width="500"
                            height="500" src={section_img} alt="" srcset="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;