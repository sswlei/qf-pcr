import React, { Component } from 'react';
import NormalMale from '../../assets/normalMale.JPG';
import ReactImageMagnify from 'react-image-magnify';
import { DropdownButton, Dropdown, Button, ButtonGroup, Card, Row, Container } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import prenatalRAD_data  from "../../data/GuidedPractice/prenatalRAD.json"

class PrenatalRadDemo extends Component {

    constructor(props) {
        super(props);
        this.initState();
        this.createDropdown = this.createDropdown.bind(this);
        this.getAnswerBackground = this.getAnswerBackground.bind(this);
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

    getAnswerBackground(selected,answer){
        if (selected===""||selected==null){
            return "white";

        }
        if (selected===answer){
            return "lightgreen";
        }
        else{
            return "#F1A3A3";
        }
    }

    createDropdown(question_data){
        let dropdown = [];
        for (let x in question_data){
            for (let question of question_data[x]){
                dropdown.push(
                    <Dropdown className="mb-3 mr-2" as={ButtonGroup}>
                        <label className="mx-0 my-0 px-4 py-0 rounded-left" style={{border:"1px solid gray",lineHeight:"38px",background:this.getAnswerBackground(this.state.answers[question.id].value,question.answer)}}>
                            {this.state.answers[question.id]===""?"Select":this.state.answers[question.id].name}
                        </label>
                        <Dropdown.Toggle variant="secondary" style={{height:40}}/>
                        <Dropdown.Menu alignRight>
                            {question.options.map(function(option){
                                return <Dropdown.Item onClick={()=>{var updatedAnswers = {...this.state.answers};updatedAnswers[question.id]=option;this.setState({answers:updatedAnswers});}}>{option.name}</Dropdown.Item>
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
                <div className="col-7" style={{maxHeight:600}}>
                        <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <React.Fragment>
                                    <div className="tools">
                                        <button onClick={() => zoomIn()}>Zoom In</button>
                                        <button onClick={() => zoomOut()}>Zoom Out</button>
                                        <button onClick={() => resetTransform()}>Reset</button>
                                    </div>
                                    <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                        <img src={NormalMale} alt="Normal Male" />
                                    </TransformComponent>
                                </React.Fragment>
                            )}

                        </TransformWrapper>
                </div>
                <Card  className="col-5 py-3" style={{maxHeight:600}}>
                    <Card.Body style={{overflowY:"scroll"}}>

                        {
                            Object.keys(prenatalRAD_data).map(function(key, index) {
                                return (
                                    <div>
                                        <label style={{fontWeight:"bold", color:'#6c757d'}}>{key}</label> 
                                        <div>
                                        {this.createDropdown(prenatalRAD_data[key],key)}

                                        </div>
                                    </div>
                                )
                            },this)
                        }
                    </Card.Body>
                </Card>
            </Row>
        )
    }
}

export default PrenatalRadDemo;