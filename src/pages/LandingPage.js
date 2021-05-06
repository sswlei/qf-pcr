import React, { Component } from 'react';
import { Button, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../assets/landingPage.png'

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-center col-12 h-100 text-dark">
                <span className="p-5 text-center border-4 border" style={{ borderRadius: 10 }}>
                    <h2 className=" text-info" style={{ letterSpacing: 1 }}>Quantitative Fluorescence PCR:</h2>
                    <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex flex-column align-items-center bg-white p-3 col-12 text-monospace">
                        <p className="mt-4">Overview and data analysis</p>
                        <Image src={Logo} width="90%" className="mb-4" />
                        <Row className="text-start mt-4 d-flex flex-column align-items-center">
                            <Link to="/">
                                <Button variant="outline-success">START </Button>
                            </Link>
                        </Row>

                    </div>
                </span>
            </div>
        )
    }
}

export default LandingPage;