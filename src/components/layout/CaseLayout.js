import React, { Component } from "react";
import { Col, Nav, Row, Card, Tabs, Tab, Container, Button } from 'react-bootstrap';
import {Outlet, Route, Routes, Navigate } from "react-router-dom";

const CaseLayout = (props) => {
    return (
        <Container className="mt-4">
            <h2 className="mb-3 text-monospace text-info">{props.title}</h2>
            <Row>
                <Col sm={12}>
                    <Nav>
                        <Nav.Item className={`step-arrows`}>
                            <Nav.Link href="intro"><strong>Step 1</strong> <br></br> Review quality of peaks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`step-arrows`}>
                            <Nav.Link href="identify-markers"><strong>Step 2</strong> <br></br> Identify Markers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`step-arrows`}>
                            <Nav.Link href="final-conclusion"><strong>Step 3</strong> <br></br> Final Conclusion</Nav.Link>
                        </Nav.Item> 
                        {/* <Nav.Item className={`step-arrows ${this.getStepColor(0)}`}>
                            <Nav.Link disabled={!this.isStepCompleted(0)}  eventKey={0}><strong>Step 1</strong> <br></br> Review quality of peaks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`step-arrows ${this.getStepColor(1)}`} >
                            <Nav.Link disabled={!this.isStepCompleted(1)} eventKey={1}><strong>Step 2</strong> <br></br> Identify Markers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`step-arrows ${this.getStepColor(2)}`}>
                            <Nav.Link disabled={!this.isStepCompleted(2)}  eventKey={2}><strong>Step 3</strong> <br></br> Genotype Table</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`step-arrows ${this.getStepColor(3)}`}>
                            <Nav.Link disabled={!this.isStepCompleted(3)}  eventKey={3}><strong>Step 4</strong> <br></br> Final Conclusion</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Card className="px-5 py-5 mb-5">
                    <Outlet></Outlet>
                </Card>
            </Row>
        </Container>
    )
}
export default CaseLayout;