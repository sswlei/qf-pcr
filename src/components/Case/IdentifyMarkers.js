import React, { useState, useEffect } from 'react';
import xIcon from '../../assets/x.svg';
import checkIcon from '../../assets/checkmark.svg';
import { Dropdown, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useSelector, useDispatch } from 'react-redux'
import {
    updateAnswer,
    userAnswers,
    initAnswers
  } from './IdentifyMarkerSlice'
import MarkerDropdown from './MarkerDropdown';
const IdentifyMarkers = (props) => {
    // const [answers,setAnswers] = useState({});
    const dispatch = useDispatch();
    const answers = useSelector(userAnswers);
    console.log("get answers",answers)
    const onClickNext= () => {
        // saveAnswers();
        // if (checkAllAnswered()){
        //     props.onClickNext();
        // }
        // else{
        //     if (window.confirm("Some questions have not been answered! Would you like to proceed?")){
        //         props.onClickNext();
        //     }
        // }
    }
    
    const saveAnswers = () => {
        // if (props.saveAnswers){
        //     if (props.caseType!=null && props.caseType != "" && props.caseId!=null){
        //         localStorage.setItem(props.caseType+props.caseId+"_markers",JSON.stringify(state.answers));
        //     }
        // }
    }

    const checkAllAnswered = () => {

        // if (!props.canSkip){
        //     for (let question of Object.keys(state.answers)){
        //         for (const [key, value] of Object.entries(state.answers[question])){
        //             if (value === '' || value === null ){
        //                 return false;
        //             }
        //         }
        //     }
        // }
        // return true;
    }

    const initState = () => {
        console.log('hi')
        let answerState = {};
        for (let key of Object.keys(props.data.markers)){
            answerState[key] = {};
            for (let question of props.data.markers[key].questions){
                answerState[key][question.id]="";
            }
        }
        dispatch(initAnswers({answers:answerState}));
    }


    const getAnswerBackground = (isCorrect) => {
        // if (props.showEvaluation){
        //     if (isCorrect===""||isCorrect==null){
        //         return "white";
        //     }
        //     if (isCorrect){
        //         return "#BCF4BC";
        //     }
        //     else{
        //         return "#E67878";
        //     }
        // }
        // else{
        //     return "white";
        // }
        return "white";
    }

    const checkQuestionCorrect = (key) => {
        // if (props.showEvaluation){
        //     for (var question_id in state.answers[key]){
        //         var isCorrect = state.answers[key][question_id].correct;
        //         if (isCorrect === null || isCorrect === undefined){
        //             return null;
        //         }
        //         if (isCorrect === false){
        //             return xIcon;
        //         }
        //     }
        //     return checkIcon;
        // }
        // else{
        //     return null;
        // }
    }

    const onAnswerSelect = (key, option_data, question_data) => {
        // alert("her")
        // var updatedAnswers = {...answers};
        // option_data.correct = option_data.value===question_data.answer;
        // updatedAnswers[key][question_data.id]=option_data;
        // console.log(updatedAnswers);
        // dispatch(updateAnswer(markerId:key,questionId: ))
        // setAnswers(updatedAnswers);
    }

    useEffect(()=>{
        initState();
        console.log("load");
    },[]);
    

    return (
        <>
            <h2>Identify markers</h2>
            <p>In the following interactive chromatogram example, examine each marker and select which Chromosome the marker is on (look at label at the bottom), 
                and whether the marker has One peak (and therefore is uninformative) has 2 peaks (and therefore is diallelic) or has 3 peaks (and therefore is triallelic). 
                Zoom in on the image if necessary. Notice that the peak area is labelled underneath each peak (you will use this data in Step 3). 
                {props.category == "guidedpractice"? "Correct answers will be marked in green and with a checkmark; incorrect answers will be marked in red and with an x. You can try again if your selection was not correct. "
                :" "}Note that AMEL and TAF9L have unique selections:
            </p>
            <p> AMEL: are there 2 peaks (XY) or 1 peak? (only X, but check TAF9L data to confirm number of X chromosomes)</p>
            <p>
            TAF9L: compare peak heights: if the first peak is 2x than the second one, this is evidence for 1 X chromosome; if the first peak has same height, this is evidence for 2 X chromosomes.</p>

            <Row>
                
                <Col md={12} lg={7} style={{maxHeight:600}}>
                        <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <React.Fragment>
                                    <div className="tools mb-2">
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomIn()}>Zoom In</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomOut()}>Zoom Out</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => resetTransform()}>Reset</Button>
                                    </div>
                                    <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                        <img src={props.data.image} />
                                    </TransformComponent>
                                </React.Fragment>
                            )}

                        </TransformWrapper>
                </Col>
                <Col md={12} lg={5}>
                    <Card style={{maxHeight:650}}>
                        <Card.Body style={{overflowY:"scroll"}}>
                            {
                                Object.keys(props.data.markers).map(function(key, index) {
                                    return (
                                        <div>
                                            <label onClick={()=>{dispatch(updateAnswer("test"));}} style={{fontWeight:"bold", color:'#6c757d'}}>{key} 
                                                <span>
                                                    <img className="ml-2" style={{height:15}} src={checkQuestionCorrect(key)}></img>
                                                </span>
                                            </label> 
                                            <div>
                                            {
                                                props.data.markers[key].questions.map((questionData)=>{
                                                    return <MarkerDropdown questionData={questionData} showEvaluation={true}></MarkerDropdown>
                                                })
                                            }
                                            </div>
                                        </div>
                                    )
                                },this)
                            }
                        </Card.Body>
                    </Card>
                </Col>
                
                <Button className={"mt-3"} onClick={onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>

            </Row>
        </>
    
    )
}

export default IdentifyMarkers;