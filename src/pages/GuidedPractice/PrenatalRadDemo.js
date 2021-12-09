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
    }

    initState(){
        let answerState = {};
        for (let key of Object.keys(prenatalRAD_data)){
            for (let question of prenatalRAD_data[key].questions){
                console.log(question)
                answerState[question.id] = "";
            }
        }
        console.log("answer",answerState);
        this.state = {answers:answerState};
    }

    createDropdown(question_data){
        let dropdown = [];
        for (let x in question_data){
            for (let question of question_data[x]){
                dropdown.push(
                    <Dropdown className="mt-3 d-inline" as={ButtonGroup}>
                        <label className="mx-0 my-0 px-4 py-0" style={{border:"1px solid gray",lineHeight:"38px"}}>{this.state.answers[question.id]===""?"Select":this.state.answers[question.id]}</label>
                        <Dropdown.Toggle/>
                        <Dropdown.Menu alignRight>
                            {question.options.map(function(option){
                                return <Dropdown.Item onClick={()=>{var updatedAnswers = {...this.state.answers};updatedAnswers[question.id]=option.value;this.setState({answers:updatedAnswers}); console.log("uodate",this.state)}}>{option.name}</Dropdown.Item>
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
            <Container>
                <Row>
                    <Card className="col-7">
                        <Card.Body>
                            <TransformWrapper initialScale={0.3} minScale={0.3} maxScale={2} centerOnInit={true}>
                                <TransformComponent wrapperStyle={{width:"100%",height:500}}>
                                    <img src={NormalMale} alt="Normal Male" />
                                </TransformComponent>
                            </TransformWrapper>
                        </Card.Body>
                    </Card>
                    <Card  className="col-5">
                        <Card.Body>

                            {
                                Object.keys(prenatalRAD_data).map(function(key, index) {
                                    return (
                                        <div>
                                            <Button variant="secondary">{key}</Button>
                                            {this.createDropdown(prenatalRAD_data[key],key)}
                                        </div>
                                    )
                                },this)
                            }
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default PrenatalRadDemo;