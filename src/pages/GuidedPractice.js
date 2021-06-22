import React, { Component } from 'react';
import { Button, Row, Image, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../assets/landingPage.png';
import Table from '../assets/genotypeTable.xlsx';
import { Download } from 'react-bootstrap-icons';

class GuidedPractice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null

        }
    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

                <h4 className="text-info ml-5 border-bottom border-dark" style={{ letterSpacing: 1 }}>Guided Demo</h4>


                {this.state.selected == null ?
                    <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                        <Card className="col-md-5 col-sm-9 m-2" >
                            <Card.Body>
                                <Card.Title>Prenatal Rapid Aneuploidy Detection</Card.Title>
                                <hr />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Button onClick={() => this.setState({ selected: 'Prenatal Rapid Aneuploidy Detection' })} variant="primary">Start</Button>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-5 col-sm-8 m-2" >
                            <Card.Body>
                                <Card.Title>Pregnancy Loss (PL) QF-PCR</Card.Title>
                                <hr />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Button disabled onClick={() => this.setState({ selected: 'Pregnancy Loss (PL) QF-PCR' })} variant="primary">Start</Button>
                            </Card.Body>
                        </Card>

                    </Row> :

                    <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                        <Card className="col-12 m-2" >
                            <Card.Body>
                                <Card.Title className="d-flex">{this.state.selected} 
                               
                                   <p className="ml-auto"><a 
                                    
                                    href={Table}
                                    download="genotypetable.xlsx">Genotype Table <Download className="m-1" size="18" /></a></p> 
                                    {/* <a href="../assets/landingPage.png" download>   </a> */}
                               
                                </Card.Title>
                                <hr />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                {/* <Button onClick={() => this.setState({ selected: 'Prenatal Rapid Aneuploidy Detection' })} variant="outline-primary">Start</Button> */}
                            </Card.Body>
                        </Card>

                    </Row>
                }

            </div>
        )
    }
}

export default GuidedPractice;