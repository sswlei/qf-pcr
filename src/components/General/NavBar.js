import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {

    return (

        <Navbar style={{backgroundColor: 'rgb(248,249,345,1)',   position: 'sticky'}} fixed="top">
            <Navbar.Brand className={'ms-3'} style={{color: '#043E6B'}} href="/introduction"><h3>QF - PCR</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse >
                <Nav className="ms-auto mr-3 text-monospace ">

                    <Nav.Link href="/introduction" className={`${useMatch('/introduction/*') ? "active border-bottom border-secondary" : null} ms-2`}>Introduction</Nav.Link>
                    <Nav.Link href="/background" className={`${useMatch('/background/*') ? "active border-bottom border-secondary" : null} ms-2`}>Background</Nav.Link>
                    <Nav.Link href="/guidedpractice" className={`${useMatch('/guidedpractice/*') ? "active border-bottom border-secondary" : null} ms-2`}>Guided Practice</Nav.Link>
                    <Nav.Link href="/practice" className={`${useMatch('/practice/*') ? "active border-bottom border-secondary" : null} ms-2`}>Practice Cases</Nav.Link>
                    <Nav.Link href="/quiz" className={`${useMatch('/quiz/*') ? "active border-bottom border-secondary" : null} mx-2`}>Quiz</Nav.Link>


                </Nav>
                <Button href="/" className="me-3" variant="outline-info"> <FontAwesomeIcon rotation={180} size={'1x'} icon={faSignOutAlt} /></Button>
            </Navbar.Collapse>
            
        </Navbar>

    )
    
}

export default NavBar;