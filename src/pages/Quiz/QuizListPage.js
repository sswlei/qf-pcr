import React, { Component } from 'react';
import { Button, Row, Card } from 'react-bootstrap';


class QuizListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.onClickQuiz = this.onClickQuiz.bind(this);
    }

    onClickQuiz(quiz_num){
        this.props.history.push(`/quiz/${quiz_num}`);

    }

    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

                <h4 className="text-info" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Quizzes</h4>
                <Row style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-12 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                    <Card className="col-md-3 col-sm-9 m-2" >
                        <Card.Body>
                            <Card.Title>Quiz #1</Card.Title>
                            <hr />
                            <Card.Text>
                                Quiz on QF-PCR
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Button style={{display:"block",margin:"auto", width:100}} onClick={()=>{this.onClickQuiz(1);}} variant="primary">Start</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}

export default QuizListPage;