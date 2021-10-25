import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="fixed-top" >
                <Navbar bg="dark" variant="dark">
                    <Container className="nevBar">
                        <div><Navbar.Brand to="/home">Pro Course</Navbar.Brand>
                        </div>
                        <div><Nav className="me-auto">
                            <NavLink className="customNev" to="/home">Home</NavLink>
                            <NavLink className="customNev" to="/service">Service</NavLink>
                            <NavLink className="customNev" to="/about">About Us</NavLink>
                            <NavLink className="customNev" to="/contact">Contact Us</NavLink>


                        </Nav></div>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;