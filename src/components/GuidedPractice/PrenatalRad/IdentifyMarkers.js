import React, { Component } from 'react';
import NormalMale from '../../../assets/normalMale.JPG';
import xIcon from '../../../assets/x.svg';
import checkIcon from '../../../assets/checkmark.svg';
import { Dropdown, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import prenatalRAD_data  from "../../../data/GuidedPractice/prenatalRAD.json"

class IdentifyMarkers extends Component {

    constructor(props) {
        super(props);
        this.initState();
        this.createDropdown = this.createDropdown.bind(this);
        this.getAnswerBackground = this.getAnswerBackground.bind(this);
        this.onAnswerSelect = this.onAnswerSelect.bind(this);
        this.checkQuestionCorrect = this.checkQuestionCorrect.bind(this);
    }

    initState(){
        let answerState = {};
        for (let key of Object.keys(prenatalRAD_data.markers)){
            answerState[key] = {};
            for (let question of prenatalRAD_data.markers[key].questions){
                answerState[key][question.id]="";
            }
        }
        this.state = {answers:answerState};
    }


    getAnswerBackground(isCorrect){
        if (isCorrect===""||isCorrect==null){
            return "white";
        }
        if (isCorrect){
            return "#BCF4BC";
        }
        else{
            return "#E67878";
        }
    }

    checkQuestionCorrect(key){
        for (var question_id in this.state.answers[key]){
            var isCorrect = this.state.answers[key][question_id].correct;
            if (isCorrect === null || isCorrect === undefined){
                return null;
            }
            if (isCorrect === false){
                return xIcon;
            }
        }
        return checkIcon;
    }

    onAnswerSelect(key, option_data, question_data){
        var updatedAnswers = {...this.state.answers};
        option_data.correct = option_data.value===question_data.answer;
        updatedAnswers[key][question_data.id]=option_data;
        this.setState({answers:updatedAnswers});
    }

    createDropdown(key,question_data){
        let dropdown = [];
        for (let x in question_data){
            for (let question of question_data[x]){
                dropdown.push(
                    <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                        <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:"1px solid gray",lineHeight:"38px",background:this.getAnswerBackground(this.state.answers[key][question.id].correct)}}>
                            {this.state.answers[key][question.id]===""?"Select":this.state.answers[key][question.id].name} 
                        </label>
                        <Dropdown.Toggle variant="secondary" style={{height:40}}/>
                        <Dropdown.Menu alignRight>
                            {question.options.map(function(option){
                                return <Dropdown.Item onClick={()=>{this.onAnswerSelect(key, option, question)}}>{option.name}</Dropdown.Item>
                            },this)}
                        </Dropdown.Menu>
                    </Dropdown> 
                )
            }
        }
        return dropdown;
    }
    
    render() {

        return (
            <>
                <h2>Identify markers</h2>
                <p>In the following interactive example, please examine the image and select the correct marker(s) for each section.</p>
                <Row>
                    
                    <Col sm={12} md={7} style={{maxHeight:600}}>
                            <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                                {({ zoomIn, zoomOut, resetTransform }) => (
                                    <React.Fragment>
                                        <div className="tools"  className="mb-2">
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomIn()}>Zoom In</Button>
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomOut()}>Zoom Out</Button>
                                            <Button variant="outline-primary" className="mr-2 py-1" onClick={() => resetTransform()}>Reset</Button>
                                        </div>
                                        <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                            <img src={NormalMale} alt="Normal Male" />
                                        </TransformComponent>
                                    </React.Fragment>
                                )}

                            </TransformWrapper>
                    </Col>
                    <Col sm={12} md={5}>
                        <Card style={{maxHeight:650}}>
                            <Card.Body style={{overflowY:"scroll"}}>

                                {
                                    Object.keys(prenatalRAD_data.markers).map(function(key, index) {
                                        return (
                                            <div>
                                                    <label style={{fontWeight:"bold", color:'#6c757d'}}>{key} 
                                                        <span>
                                                            <img className="ml-2" style={{height:15}} src={this.checkQuestionCorrect(key)}></img>
                                                        </span>
                                                    </label> 
                                                <div>
                                                    {this.createDropdown(key,prenatalRAD_data.markers[key])}
                                                </div>
                                            </div>
                                        )
                                    },this)
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Button className={"mt-3"} onClick={this.props.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>

                </Row>
            </>
          
        )
    }
}

export default IdentifyMarkers;