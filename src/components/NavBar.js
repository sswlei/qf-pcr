import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="text-info" href="#introduction"><h3>QF - PCR</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="ml-auto ">
                        <Nav.Link href="#introduction" className={this.props.history.location.pathname === '/introduction' ? "active" : null}>Introduction</Nav.Link>
                        <Nav.Link href="#background" className={this.props.history.location.pathname === '/background' ? "active" : null}>Background</Nav.Link>
                        <Nav.Link href="#quiz" className={this.props.history.location.pathname === '/quiz' ? "active" : null}>Quiz</Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default withRouter(NavBar);