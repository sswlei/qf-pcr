import React, { Component } from 'react';
import Quiz from "../../components/Quiz/Main";
import { Container } from 'react-bootstrap';

class QuizPage extends Component {

    constructor(props) {
        super(props);
    }
    render() {


        return (
            <Container className="my-5">
                <Quiz quizData={this.props.quizData}></Quiz>
            </Container>
        )
    }
}

export default QuizPage;