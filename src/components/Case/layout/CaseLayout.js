import React, { useState, useEffect } from "react";
import { Col, Nav, Row, Card, Tabs, Tab, Container, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { updateCaseData } from './CaseSlice'
import { initAnswers } from "../feature/IdentifyMarkerSlice";
const CaseLayout = (props) => {    
    const {caseId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://610174ghz0.execute-api.us-west-2.amazonaws.com/default/get_case_data?case_id='+caseId)
        .then((response) => response.json())
        .then((data) => { 
            dispatch(updateCaseData(data.Item));
            let answerState = {};
            for (let key of Object.keys(data.Item.markers)){
                answerState[key] = {};
                for (let question of data.Item.markers[key].questions){
                    answerState[key][question.id]="";
                }
            }
            console.log('init2',answerState);
            dispatch(initAnswers({...answerState}));
        });
    },[]);
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