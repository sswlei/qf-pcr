import React, { useEffect } from "react";
import { Col, Nav, Row, Card, Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Outlet, useParams, useMatch } from "react-router-dom";
import { updateCaseData } from './CaseSlice'
import { initAnswers } from "../feature/IdentifyMarkerSlice";
const CaseLayout = (props) => {    
    const {caseId,category} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://610174ghz0.execute-api.us-west-2.amazonaws.com/default/get_case_data?case_id='+caseId)
        .then((response) => response.json())
        .then((data) => { 
            dispatch(updateCaseData({caseId:caseId, ...data.Item}));
            populateAnswers(data);
        });
    },[]);

    const populateAnswers = (data) => {
        let answerState = {};
        if (localStorage.getItem(caseId) == null){
            for (let key of Object.keys(data.Item.markers)){
                answerState[key] = {};
                for (let question of data.Item.markers[key].questions){
                    answerState[key][question.id]="";
                }
            }
        }
        else{
            answerState = JSON.parse(localStorage.getItem(caseId));
        }
        dispatch(initAnswers({...answerState}));
    }

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-monospace text-info">{category==="guidedpractice"?"Guided Practice":"Practice Case"}</h2>
            <Row>
                <Col sm={12}>
                    <Nav>
                        <Nav.Item className={`${useMatch('/:category/:caseId/intro') ? "current-step" : ""} step-arrows`}>
                            <Nav.Link href="intro"><strong>Step 1</strong> <br></br> Review quality of peaks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${useMatch('/:category/:caseId/identify-markers') ? "current-step" : ""} step-arrows`}>
                            <Nav.Link href="identify-markers"><strong>Step 2</strong> <br></br> Identify Markers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${useMatch('/:category/:caseId/final-conclusion') ? "current-step" : ""} step-arrows`}>
                            <Nav.Link href="final-conclusion"><strong>Step 3</strong> <br></br> Final Conclusion</Nav.Link>
                        </Nav.Item> 

                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card className="px-5 py-5 mb-5">
                        <Outlet></Outlet>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
export default CaseLayout;