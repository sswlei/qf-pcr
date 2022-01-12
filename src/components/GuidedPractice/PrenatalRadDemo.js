import React, { Component } from 'react';
import NormalMale from '../../assets/normalMale.JPG';
import ReactImageMagnify from 'react-image-magnify';
import { DropdownButton, Dropdown, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import prenatalRAD_data  from "../../data/GuidedPractice/prenatalRAD.json"

class PrenatalRadDemo extends Component {

    constructor(props) {
        super(props);
        this.initState();
        this.createDropdown = this.createDropdown.bind(this);
        this.getAnswerBackground = this.getAnswerBackground.bind(this);
        this.checkAllCorrect = this.checkAllCorrect.bind(this);
        this.onAnswerSelect = this.onAnswerSelect.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
    }

    initState(){
        let answerState = {};
        for (let key of Object.keys(prenatalRAD_data)){
            for (let question of prenatalRAD_data[key].questions){
                answerState[question.id] = "";
            }
        }
        this.state = {answers:answerState};
    }

    onClickNext(){
        if (this.checkAllCorrect()){
            this.props.onClickNext();
        }
        else{
            alert("Please make sure all fields are answered correctly.");
        }
    }

    getAnswerBackground(isCorrect){
        if (isCorrect===""||isCorrect==null){
            return "white";
        }
        if (isCorrect){
            return "lightgreen";
        }
        else{
            return "#F1A3A3";
        }
    }

    checkAllCorrect(){
        for (var key in this.state.answers){
            if (key, this.state.answers[key].correct != true){
                return false;
            }
        }
        return true;
    }

    onAnswerSelect(option_data, question_data){
        var updatedAnswers = {...this.state.answers};
        option_data.correct = option_data.value===question_data.answer;
        updatedAnswers[question_data.id]=option_data;
        this.setState({answers:updatedAnswers});
    }

    createDropdown(question_data){
        let dropdown = [];
        for (let x in question_data){
            for (let question of question_data[x]){
                dropdown.push(
                    <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                        <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:"1px solid gray",lineHeight:"38px",background:this.getAnswerBackground(this.state.answers[question.id].correct)}}>
                            {this.state.answers[question.id]===""?"Select":this.state.answers[question.id].name}
                        </label>
                        <Dropdown.Toggle variant="secondary" style={{height:40}}/>
                        <Dropdown.Menu alignRight>
                            {question.options.map(function(option){
                                return <Dropdown.Item onClick={()=>{this.onAnswerSelect(option, question)}}>{option.name}</Dropdown.Item>
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
            <Row>
                <p>In the following interactive example, please examine the image and select the correct chromosome/allele label for each section.</p>
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
                                Object.keys(prenatalRAD_data).map(function(key, index) {
                                    return (
                                        <div>
                                            <label style={{fontWeight:"bold", color:'#6c757d'}}>{key}</label> 
                                            <div>
                                                {this.createDropdown(prenatalRAD_data[key])}
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
        )
    }
}

export default PrenatalRadDemo;