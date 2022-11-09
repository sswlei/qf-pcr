import React, { Component } from 'react';
import { Button, Row, Image } from 'react-bootstrap';
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
                <span className="p-5 col-sm-11 col-md-9 d-flex flex-column align-items-center border" style={{ borderRadius: 17 }}>
                    <h2 className=" text-info" style={{ letterSpacing: 1 }}>Quantitative Fluorescence PCR:</h2>
                    <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-column align-items-center bg-white p-3 text-monospace">
                        <p className="mt-4">Overview and data analysis</p>
                        <Image src={Logo} width="60%" className="mb-4" />
                        <Row className="text-start mt-4 d-flex flex-column align-items-center">
                            <p style={{ fontSize: '1.2rem' }} className="mt-2">
                            Welcome to the Quantitative Fluorescence PCR (QF-PCR) online learning module.
                            Are you interested in hearing more about Quantitative Flourescence PCR as a methods for rapid aneuploidy detection?
                            Curious to learn how to analyse the data generated by this procedure?
                            Then this self-direct introduction/practice resource is for you. At this end of the resource, you will have the option to complete a final assessment to obtain proof of completion.

                            </p>
                            <p style={{ fontSize: '1.2rem' }} className="mt-2 text-center">To begin press Start</p>
                            <Button href="introduction" variant="success" style={{width:'200px'}}>START</Button>

                        </Row>

                    </div>
                </span>
            </div>
        )
    }
}

export default LandingPage;