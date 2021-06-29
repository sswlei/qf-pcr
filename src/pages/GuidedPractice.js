import React, { Component } from 'react';
import { Button, Row, Tabs, Tab, Card, Alert, Image, InputGroup, FormControl, Accordion } from 'react-bootstrap';
import Table from '../assets/genotypeTable.xlsx';
import { Download } from 'react-bootstrap-icons';
import PeakReview from '../assets/peakReview.png';
import Viewer from 'react-viewer';
import NormalMale from '../assets/normalMale.JPG'
import ReactImageMagnify from 'react-image-magnify';

class GuidedPractice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            steps: ['Review peaks for quality',
                'Identify all markers: Ch 21, Ch 18, Ch 13, X, Y',
                'Review TAF9L results',
                'Transcribe peak area to genotype table',
                ' Review all warnings',
                ' Is there enough evidence for a conclusion?',
                ' Final conclusion'
            ],
            markers: [

                { title: 'primary', keys: ['D13S634', 'D18S535', 'D21S1435', 'D21S11', 'D21S1437', 'DXS6803'] },
                { title: 'success', keys: ['D13S305', 'D18S386', 'D21S1446', 'XHPRT', 'DXS1187'] },
                { title: 'dark', keys: ['D13S800', 'D13S628', 'D18S978', 'D18S390'] },
                { title: 'danger', keys: ['D13S252', 'D18S819', 'D21S1409', 'D21S1442'] }
            ],
            currentStep: null
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

                                    <p className="ml-auto">
                                        <a
                                            href={Table}
                                            download="genotypetable.xlsx">Genotype Table <Download className="m-1" size="18" /></a></p>
                                    {/* <a href="../assets/landingPage.png" download>   </a> */}

                                </Card.Title>
                                <hr />
                                <Card.Text >


                                    Sample case: Normal male
                                    <ul>
                                        <li>Visually inspect peak trace data</li>
                                        <li>Use peak trace data to complete genotype table</li>
                                    </ul>




                                </Card.Text>
                                {this.state.currentStep !== null ?

                                    <Alert variant="success">
                                        <Alert.Heading>{this.state.steps[this.state.currentStep]}</Alert.Heading>
                                        <p>Do not proceed with analysis unless all review questions answered with YES </p>
                                        <p> NO answer = repeat PCR</p>
                                        <hr />
                                        <Row className="col-12 d-flex flex-row">
                                            <ReactImageMagnify
                                                className="col-7"
                                                enlargedImagePosition="over"
                                                smallImage={{
                                                    alt: 'Normal Male',
                                                    isFluidWidth: true,
                                                    src: NormalMale
                                                }}
                                                largeImage={{
                                                    src: NormalMale,
                                                    width: 2000,
                                                    height: 800
                                                }}
                                            />
                                            {this.state.currentStep >= 0 ?
                                                <Accordion className="col-5" defaultActiveKey={1}>
                                                    {this.state.markers.map((i, index) =>
                                                        <Card>
                                                            <Accordion.Toggle className={`bg-${i.title}`} as={Card.Header} eventKey={index + 1}>
                                                              
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={index + 1}>
                                                            <Card.Body>
                                                            {i.keys.map((x) =>
                                                                <span>
                                                                    <InputGroup size="sm" className="m-3">
                                                                        <InputGroup.Prepend>
                                                                            <InputGroup.Text id="inputGroup-sizing-sm">{x}</InputGroup.Text>
                                                                        </InputGroup.Prepend>
                                                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                                    </InputGroup> </span>)}
                                                            </Card.Body>
                                                                

                                                            </Accordion.Collapse>
                                                        </Card>
                                                    )}

                                                    
                                                </Accordion>
                                                :
                                                <Image src={PeakReview} width="60%" className="mb-4 col-5" />
                                            }

                                        </Row>

                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="outline-danger">
                                                Cancel
                                            </Button>
                                        </div>
                                    </Alert>

                                    : <Tabs
                                        id="controlled-tab-example"
                                        //activeKey={'steps'}
                                        //onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                    >
                                        <Tab eventKey="steps" title="Steps">
                                            <ol>
                                                {this.state.steps.map((i) => <li className="mt-1">{i}</li>)}


                                            </ol>
                                        </Tab>
                                        <Tab eventKey="assumptions" title="Assumptions">
                                            <p>also need to run positive (i.e. aneuploidy present) and negative controls in each QF-PCR reaction: if results fail, cannot proceed with analysis</p>
                                            <p>these results not presented as part of this online practice module, but you should assume all controls behaved as expected</p>

                                        </Tab>
                                        <Tab eventKey="contact" title="Contact" disabled>

                                        </Tab>

                                    </Tabs>}

                                {this.state.currentStep !== null ?

                                    <Button
                                        onClick={() => this.setState({ currentStep: this.state.currentStep + 1 })}
                                        variant="outline-info">Next</Button> :
                                    <Button
                                        onClick={() => this.setState({ currentStep: 0 })}
                                        variant="info">Begin</Button>}

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