import React, { Component } from 'react';
import { Button, Row, Tabs, Tab, Card, Alert, Image, InputGroup, FormControl, Accordion, Form } from 'react-bootstrap';


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
            currentStep: null,
            showAnswerKey: false
        }
        this.onClickPrenatalRad = this.onClickPrenatalRad.bind(this);
    }

    onClickPrenatalRad(){
        this.props.history.push('/practice/prenatalrad');

    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

                <h4 className="text-info" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Guided Demos</h4>
                <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                    <Card className="col-md-5 col-sm-9 m-2" >
                        <Card.Body>
                            <Card.Title>Prenatal Rapid Aneuploidy Detection</Card.Title>
                            <hr />
                            <Card.Text>
                                A guided example on Prenatal Rapid Aneuploidy Detection
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Button style={{display:"block",margin:"auto", width:100}} onClick={this.onClickPrenatalRad} variant="primary">Start</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}

export default GuidedPractice;