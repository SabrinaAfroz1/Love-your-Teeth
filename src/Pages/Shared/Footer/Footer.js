import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <div className="mt-5 text-center p-5  bg-primary text-white">
                <h2 className="fs-1 text-white mb-5">Dr. Rosenberg's Curriculum Vitae</h2>
                <button type="button" className="btn btn-light fs-4 ">Learn More</button>

            </div>
            <div className="bg-dark">
                <div className="Container ">


                    <Nav className="justify-content-end" >
                        <Nav.Link>Privacy Policy</Nav.Link>
                        <Nav.Link >About Us</Nav.Link>
                        <Nav.Link >Contact Us</Nav.Link>
                        <Nav.Link >Terms & Conditions</Nav.Link>
                    </Nav>
                </div>
            </div>

        </div >
    );
};

export default Footer;