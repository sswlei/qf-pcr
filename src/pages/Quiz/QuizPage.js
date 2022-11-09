import React, { Component } from 'react';
import Quiz from "../../components/Quiz/Quiz";
import { Container } from 'react-bootstrap';

const QuizPage = () => {
    return (
        <Container className="my-5">
            <Quiz></Quiz>
        </Container>

    )
}

export default QuizPage;